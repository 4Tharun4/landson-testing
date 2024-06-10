"use client";
import {
  BaggageClaim,
  BarChart2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Gift,
  Layers3,
  LayoutGrid,
  LogOut,
  ReceiptIndianRupee,
  RollerCoaster,
  ScrollText,
  ShoppingBag,
  TicketSlash,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Sidebar({}) {

  const [open,isopen]=useState(false)
  const pathname = usePathname();
  const sidebarlinks = [
    {
      title: "Customers",
      icon: CircleUserRound,
      href: "/dashboard/customers",
    },
    {
      title: "Orders",
      icon: BarChart2,
      href: "/dashboard/orders",
    },
    {
      title: "Dealers",
      icon: ReceiptIndianRupee,
      href: "/dashboard/delears",
    },
    {
      title: "Settings",
      icon: CircleUserRound,
      href: "/dashboard/settings",
    },
  ];
  const catloglinks = [
    {
      title: "Products",
      href: "/dashboard/products",
      icon: ShoppingBag,
    },
    {
      title: "Banners",
      href: "/dashboard/banners",
      icon: TicketSlash,
    },
    {
      title: "Attributes",
      href: "/dashboard/attributes",
      icon: RollerCoaster,
    },
    {
      title: "Coupns",
      href: "/dashboard/coupns",
      icon: Gift,
    },
    {
      title: "categories",
      href: "/dashboard/categories",
      icon: ScrollText ,
    },
    
  ];
  return (
    <div className="px-4   mobile:hidden  tablet:w-20   text-black   bg-white  shadow-xl fixed top-16 space-y-6 w-52  h-screen   mobile:w-0" >
      <div className="flex space-y-3 gap-6 flex-col mt-14">
        <Link
          href={"/dashboard"}
          className={
            pathname == "/dashboard"
              ? "flex items-center space-x-3 px-6 py-2 border-l-4  border-green-500 bg-green-100"
              : "flex items-center space-x-3 px-6 py-2"
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>

        <Collapsible>
          <CollapsibleTrigger className="" onClick={()=>isopen(!open)
          }>
            <button className="flex items-center space-x-6 px-6 py-2">
              <div className=" flex items-center space-x-3">
                <Layers3 />
                <span>Catelog</span>
              </div>
              {
                open?<ChevronRight />: <ChevronDown />
              }
              
             
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            {catloglinks.map((Itemes, i) => {
              const Icons = Itemes.icon;
              return (
                <Link
                 key={i}
                  href={Itemes.href}
                  className={
                    Itemes.href == pathname
                      ? "flex items-center flex-row space-x-3 px-6 py-2 border-l-4  border-green-500 bg-green-100"
                      : "flex items-center space-x-3 px-6 py-2"
                  }
                >
                  <Icons />
                  <span>{Itemes.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {sidebarlinks.map((items, i) => {
          const Icon = items.icon;
          return (
            <Link
              key={i}
              href={items.href}
              className={
                items.href == pathname
                  ? "flex items-center space-x-3 px-6 py-2 border-l-4 border-green-500 bg-green-100 "
                  : "flex items-center space-x-3 px-6 py-2"
              }
            >
              <Icon />
              <span>{items.title}</span>
            </Link>
          );
        })}
        <button className="flex  items-center space-x-3 px-6 py-2">
          <LogOut />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
