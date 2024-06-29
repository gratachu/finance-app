"use client"
import {Plus} from "lucide-react";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useNewAccount} from "@/features/accounts/hooks/use-new-account";

import {columns, Payment} from "@/app/(dashboard)/accounts/columns";
import {DataTable} from "@/components/ui/data-table";

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "711111",
    amount: 101,
    status: "success",
    email: "am@example.com",
  }
]

const AccountPage = () => {
  const newAccount = useNewAccount()

  return (
    <div className={"max-w-screen-2xl mx-auto w-full pb-10 -mt-24"}>
      <Card className={"border-none drop-shadow-sm"}>
        <CardHeader className={"gap-y-2 lg:flex-row lg:items-center lg:justify-between"}>
          <CardTitle className={"text-xl line-clamp-1"}>
            Account Page
          </CardTitle>
          <Button onClick={newAccount.onOpen} size={"sm"}>
            <Plus className={"size-4 mr-2"}/>
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={data}
            filterKey={"email"}
            onDelete={() => {}}
            disabled={false}
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default AccountPage
