import {
    NativeSelectField,
    NativeSelectRoot,
  } from "./ui/native-select"
import { Input } from '@chakra-ui/react'

export default function Filters({ filter, setFilter }){
    return(
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-xl">Filters</h3>
            <Input 
              variant={"subtle"}
              placeholder="Search" 
              onChange={(e) => setFilter({...filter, search: e.target.value})}
            ></Input>
            <NativeSelectRoot variant={"subtle"}>
              <NativeSelectField
                onChange={(e) => setFilter({...filter, sortOrder: e.target.value})}
              >
                <option value={"desc"}>First new</option>
                <option value={"acs"}>First old</option>
              </NativeSelectField>
            </NativeSelectRoot>
        </div>
    )
}