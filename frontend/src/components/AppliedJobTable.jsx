import { Badge } from './ui/badge'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from './ui/table'
import React from 'react'

const AppliedJobTable = () => {
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
                    [1,2,].map((item,index)=>(
                        <TableRow  key={index}>
                            <TableCell>17/09/2025</TableCell>
                            <TableCell>Frontend Developer </TableCell>
                            <TableCell>Google</TableCell>
                            <TableCell><Badge>Selected</Badge></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable