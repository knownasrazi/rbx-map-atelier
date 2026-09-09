import { useState } from "react";
type Part={id:string;x:number;y:number;};
export default function Canvas(){
    const [parts,setParts]=useState<Part[]>([]);
    function add(e:React.MouseEvent){ const r=(e.target as HTMLElement).getBoundingClientRect(); setParts([...parts,{id:Math.random().toString(36).slice(2),x:e.clientX-r.left,y:e.clientY-r.top}]); }
    return <div onClick={add} className="h-96 w-full border rounded-2xl relative bg-white">{parts.map(p=><div key={p.id} style={{left:p.x,top:p.y}} className="absolute h-3 w-3 bg-black rounded-full"/> )}</div>;
}
