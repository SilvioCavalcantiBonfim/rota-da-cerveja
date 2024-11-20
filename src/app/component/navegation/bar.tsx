import Link from "next/link"
import React from "react"

export const NavegationBar: React.FunctionComponent = () => {

  return <Link href={"/"}>
    <header className="p-2 bg-black">
      <img src="/api/image?name=logo&type=public" width={50} />
    </header>
  </Link>
}