'use client'

import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { forwardRef, useState } from "react";

export const InputLock = forwardRef((props: any, ref) => {
  const [lock, setLock] = useState(true);

  return (
    <div className="relative">
      <Input type={lock ? 'password' : 'text'} {...props} ref={ref} />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer">
        {!lock && <Eye className="h-5 w-5" onClick={() => setLock(!lock)} />}
        {lock && <EyeOff className="h-5 w-5" onClick={() => setLock(!lock)} />}
      </div>
    </div>
  );
});