'use client'

import React from 'react';

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link"
import Image from 'next/image';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

const MainNavBar: React.FC = () => {
  return (
    <div className="flex items-center py-2 px-2 ">
    <div className="flex-shrink-0 px-2">
        <Image
          src="/logo.png"
          width={45}
          height={45}
          alt="hello"
        />
    </div>
    <NavigationMenu className="justify-center">
      <NavigationMenuList>
        <NavigationMenuItem >
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem >
          <Link href="/demo" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Demo
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
  );
};

export default MainNavBar;
