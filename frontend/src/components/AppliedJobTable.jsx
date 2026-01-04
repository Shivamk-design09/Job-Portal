import { Badge } from './ui/badge'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from './ui/table'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAppliedJobs } from '../redux/applicationApi'

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector(store => store.job)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAppliedJobs())
  }, [dispatch])

  return (
    <div>
        <Table>
            <TableCaption> A list of all applied jobs are here</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    allAppliedJobs.length <= 0 ? <span>No applied jobs</span> : allAppliedJobs.map((appliedJob)=>(
                        <TableRow  key={appliedJob._id}>
                            <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                            <TableCell>{appliedJob?.job?.title}</TableCell>
                            <TableCell>{appliedJob?.job?.company?.name}</TableCell>
                            <TableCell><Badge className={`${appliedJob?.status === 'rejected' ? 'bg-red-400' : appliedJob.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'}`}>{appliedJob.status.toUpperCase()}</Badge></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable