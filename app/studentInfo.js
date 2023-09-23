import React from "react";
import Link from "next/link"

export default function studentInfo() {
    return (
        <div>
            <h2>Sarbjeet Brar</h2>
            <h2>CPRG 306- C</h2>
            <Link href={"https://github.com/sarbjee/cprg306-assignments.git"}>Github</Link>
        </div>
    )
}