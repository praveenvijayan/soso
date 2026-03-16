"use client";

import * as React from "react";
import {
  Building2,
  ChevronDown,
  Settings,
  LogOut,
  User,
  Grid3X3,
  Check,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

/* ---- App Drawer apps list ---- */
const DRAWER_APPS = [
  { name: "Vision & Strategic Intent", icon: "◎" },
  { name: "Corporate Strategy",        icon: "▦" },
  { name: "Strategic Planning",        icon: "⌂", active: true },
  { name: "Initiative & Program Portfolio", icon: "⋮⋮" },
  { name: "Business Unit Alignment",   icon: "👥" },
  { name: "Operating Model",           icon: "⊞" },
  { name: "Financial Strategy & Budget", icon: "$" },
  { name: "Risk & Compliance Mgmt",    icon: "⛨" },
  { name: "Governance & Decision Mgmt", icon: "✓" },
  { name: "KPI & Performance Mgmt",   icon: "⤢" },
  { name: "Executive Intelligence",    icon: "▲" },
  { name: "Platform & Collab Services", icon: "◈" },
];

const ORGS = ["Acme Corp", "Global HQ", "APAC Division", "EU Operations"];

export function AppHeader() {
  const [org, setOrg] = React.useState("Acme Corp");

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-6 gap-4">
      {/* ── LEFT ── */}
      <div className="flex items-center gap-4">
        {/* App Drawer trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-lg shrink-0"
              aria-label="Open app drawer"
            >
              <Grid3X3 className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[400px] p-0 flex flex-col">
            <SheetHeader className="px-6 py-5 border-b border-border shrink-0">
              <SheetTitle className="text-base font-semibold tracking-tight">
                Domain Apps
              </SheetTitle>
            </SheetHeader>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-2 gap-3">
                {DRAWER_APPS.map((app) => (
                  <button
                    key={app.name}
                    className={[
                      "flex flex-col gap-4 p-5 rounded-xl border text-left transition-all duration-200",
                      "hover:shadow-md hover:-translate-y-1 hover:border-foreground/30",
                      app.active
                        ? "border-foreground/60 bg-muted text-foreground"
                        : "border-border bg-muted/40 text-muted-foreground hover:text-foreground",
                    ].join(" ")}
                  >
                    <span className="text-xl leading-none">{app.icon}</span>
                    <span className="text-xs font-medium leading-snug">{app.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Brand mark + title */}
        <div className="flex items-center gap-3">
          <div
            className="flex h-8 w-8 items-center justify-center rounded"
            style={{ background: "var(--orion-yellow, #F5C842)" }}
          >
            <span className="text-sm font-bold leading-none" style={{ color: "#111110" }}>
              S
            </span>
          </div>
          <span className="hidden sm:block text-sm font-semibold tracking-tight truncate max-w-xs">
            SOSO
            <span className="hidden lg:inline font-normal text-muted-foreground ml-1 text-xs">
              Strategy Operating System for Organizations
            </span>
          </span>
        </div>

        <Separator orientation="vertical" className="h-5 hidden sm:block" />

        {/* Org selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <Building2 className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden sm:inline">{org}</span>
              <ChevronDown className="h-3 w-3 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-[180px]">
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Switch Organization
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {ORGS.map((o) => (
              <DropdownMenuItem
                key={o}
                onClick={() => setOrg(o)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                <span>{o}</span>
                {o === org && <Check className="h-3.5 w-3.5 ml-auto text-primary" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* ── RIGHT ── */}
      <div className="flex items-center gap-2">
        {/* Settings */}
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-full"
          aria-label="Settings"
        >
          <Settings className="h-4 w-4" />
        </Button>

        {/* Theme toggle */}
        <ThemeToggle />

        <Separator orientation="vertical" className="h-5 mx-1" />

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-9 gap-2 px-2 rounded-full"
              aria-label="User menu"
            >
              <Avatar className="h-7 w-7">
                <AvatarFallback className="text-xs font-semibold bg-muted">
                  JS
                </AvatarFallback>
              </Avatar>
              <ChevronDown className="h-3 w-3 opacity-50 hidden sm:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-[180px]">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold">John Smith</span>
                <span className="text-xs text-muted-foreground">john@acmecorp.com</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 cursor-pointer">
              <User className="h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 cursor-pointer">
              <Settings className="h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 cursor-pointer text-destructive focus:text-destructive">
              <LogOut className="h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
