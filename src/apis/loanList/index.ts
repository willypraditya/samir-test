import axiosInstance from '@/utils/axiosInstance'
import type { LoanListResponse } from './types'

interface getLoanListProps {
  id?: string
  sortBy?: string
  borrowerName?: string
  page: number
}

const fetchLoanList = async ({ id, borrowerName, sortBy, page }: getLoanListProps) => {
  const data: LoanListResponse = await axiosInstance.get('loans.json')

  let parsedData = data

  if (id) {
    parsedData = {
      ...parsedData,
      data: parsedData.data.filter((item) => item.id === id)
    }
  }

  if (borrowerName) {
    parsedData = {
      ...parsedData,
      data: parsedData.data.filter((item) =>
        item.borrower.name.toLocaleLowerCase().includes(borrowerName.toLocaleLowerCase())
      )
    }
  }

  if (sortBy) {
    if (sortBy === 'borrower') {
      parsedData = {
        ...parsedData,
        data: parsedData.data.sort((a, b) => a.borrower.name.localeCompare(b.borrower.name))
      }
    }

    if (sortBy === 'term') {
      parsedData = {
        ...parsedData,
        data: parsedData.data.sort((a, b) => b.term - a.term)
      }
    }

    if (sortBy === 'risk') {
      parsedData = {
        ...parsedData,
        data: parsedData.data.sort((a, b) => a.riskRating.localeCompare(b.riskRating))
      }
    }
  }

  const itemsPerPage = 5
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = page * itemsPerPage

  parsedData = {
    ...parsedData,
    data: [...parsedData.data.slice(startIndex, endIndex)],
    maxPage: Math.ceil(parsedData.data.length / itemsPerPage) || 1
  }

  return parsedData
}

export default fetchLoanList
