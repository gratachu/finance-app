"use client"

import {useMemo} from "react";
import {SingleValue} from "react-select";
import CreatableSelect from "react-select/creatable";

type Props = {
  onChange: (value?: string) => void
  onCreate?: (value: string) => void
  options?: { label: string, value: string }[]
  value?: string | null | undefined
  disabled?: boolean
  placeholder?: string
}

export const Select = ({
  value,
  onChange,
  disabled,
  onCreate,
  options = [],
  placeholder
}: Props) => {
  const onSelect = (
    option:SingleValue<{ label: string, value: string}>
  ) => {
    onChange(option?.value)
  }

  const formmattedValue = useMemo(() => {
    return options.find((option) => option.value === value)
  }, [options, value])

  return (
    <CreatableSelect
      placeholder={placeholder}
      className={"text-sm h-10"}
      styles={{
        control: (base) => ({
          ...base,
          borderColor: "#e2e8f0",
          ":hover": {
            borderColor: "#e2e8f0"
          }
        }),
      }}
      value={formmattedValue}
      onChange={onSelect}
      options={options}
      onCreateOption={onCreate}
      isDisabled={disabled}
    />
  )
}