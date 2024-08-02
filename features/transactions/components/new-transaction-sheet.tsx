import {z} from "zod";

import {AccountForm} from "@/features/accounts/components/account-form";

import {insertTransactionSchema} from "@/db/schema";
import {
  Sheet,
  SheetDescription,
  SheetContent,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"
import {useNewTransaction} from "@/features/transactions/hooks/use-new-transaction";
import {useCreateTransaction} from "@/features/transactions/api/use-create-transaction";

const formSchema = insertTransactionSchema.omit({
  id: true,
})

type FormValues = z.input<typeof formSchema>

export const NewTransactionSheet = () => {
  const { isOpen, onClose } = useNewTransaction()

  const mutation = useCreateTransaction()

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose()
      }
    })
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className={"space-y-4"}>
        <SheetHeader>
          New Transaction
        </SheetHeader>
        <SheetDescription>
          Add a new transaction
        </SheetDescription>
        <p>TODO: Transaction Form</p>
      </SheetContent>
    </Sheet>
  )
}
