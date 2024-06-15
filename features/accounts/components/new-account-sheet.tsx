import {useNewAccount} from "@/features/accounts/hooks/use-new-account";
import {AccountForm} from "@/features/accounts/components/account-form";

import {
  Sheet,
  SheetDescription,
  SheetContent,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"

export const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccount()

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className={"space-y-4"}>
        <SheetHeader>
          New Account
        </SheetHeader>
        <AccountForm onSubmit={() => {}} disabled={false} />
        <SheetDescription>
          Create a new account to track your transactions.
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}