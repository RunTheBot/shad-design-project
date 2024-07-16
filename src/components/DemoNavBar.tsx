'use client'

import React from 'react';

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link"

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

const DemoNavBar: React.FC = () => {
  return (
  <div className="flex items-center py-2 px-2 ">
      <div className="flex-shrink-0 px-2">
        <FcGoogle className="text-3xl z-50" />
      </div>
      <NavigationMenu className="justify-center">
        <NavigationMenuList>
          <NavigationMenuItem >
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Name
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    <div className='flex-1'/>
    <NavigationMenu className="float-right ml-auto">
        <NavigationMenuList>
          <NavigationMenuItem >
            <Link href="/demo" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem >
            <Link href="/demo/power" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Power
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem >
            <Link href="/control" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Control
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/auto" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Automation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
  </div>
  );
};

export default DemoNavBar;
