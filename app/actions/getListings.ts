import prisma from '@/app/libs/prismadb'

export interface IListingsParams {
  userId?: string
  guestCount?: number
  roomCount?: number
  bathroomCount?: number
  startDate?: string
  endDate?: string
  locationValue?: string
  category?: string
}

const createQuery = (params: IListingsParams) => {
  const {
    userId,
    roomCount,
    guestCount,
    bathroomCount,
    locationValue,
    startDate,
    endDate,
    category,
  } = params

  let query: any = {}

  if (userId) {
    query.userId = userId
  }

  if (category) {
    query.category = category
  }

  if (roomCount) {
    query.roomCount = {
      gte: roomCount,
    }
  }

  if (guestCount) {
    query.guestCount = {
      gte: guestCount,
    }
  }

  if (bathroomCount) {
    query.bathroomCount = {
      gte: bathroomCount,
    }
  }

  if (locationValue) {
    query.locationValue = locationValue
  }

  if (startDate && endDate) {
    query.NOT = {
      reservations: {
        some: {
          OR: [
            {
              endDate: { gte: startDate },
              startDate: { lte: startDate },
            },
            {
              startDate: { lte: endDate },
              endDate: { gte: endDate },
            },
          ],
        },
      },
    }
  }

  return query
}

const getListings = async (params: IListingsParams) => {
  try {
    const query = createQuery(params)

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
    })

    return listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }))
  } catch (error: any) {
    throw new Error(error)
  }
}

export default getListings
