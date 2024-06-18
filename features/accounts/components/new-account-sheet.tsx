import {z} from "zod";

import {useNewAccount} from "@/features/accounts/hooks/use-new-account";
import {AccountForm} from "@/features/accounts/components/account-form";
import {insertAccountSchema} from "@/db/schema";

import {
  Sheet,
  SheetDescription,
  SheetContent,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"

const formSchema = insertAccountSchema.pick({
  name: true,
})

type FormValues = z.input<typeof formSchema>

export const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccount()

  const onSubmit = (values: FormValues) => {
    console.log(values)
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className={"space-y-4"}>
        <SheetHeader>
          New Account
        </SheetHeader>
        <AccountForm onSubmit={onSubmit} disabled={false} />
        <SheetDescription>
          Create a new account to track your transactions.
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}