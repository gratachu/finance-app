"use client"

import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {useNewAccount} from "@/features/accounts/hooks/use-new-account";

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
      </Card>
    </div>
  )
}

export default AccountPage