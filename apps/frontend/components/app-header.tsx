"use client";
import Link from "next/link";
import {
  Building2,
  ChevronDown,
  Settings,
  LogOut,
  User,
  Grid3X3,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useAppSession } from "@/modules/platform/context/app-session-provider";
import { moduleRegistry } from "@/modules/registry";
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
export function AppHeader() {
  const { session, tenant, activeModuleId } = useAppSession();
  const orgName = tenant?.name ?? "Acme Corp";

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
                {moduleRegistry.map((module) => (
                  <Link
                    key={module.id}
                    href={`/org/${tenant?.slug ?? "acme-corp"}/${module.routeBase}`}
                    className={[
                      "flex flex-col gap-4 p-5 rounded-xl border text-left transition-all duration-200",
                      "hover:shadow-md hover:-translate-y-1 hover:border-foreground/30",
                      activeModuleId === module.id
                        ? "border-foreground/60 bg-muted text-foreground"
                        : "border-border bg-muted/40 text-muted-foreground hover:text-foreground",
                    ].join(" ")}
                  >
                    <module.icon className="h-5 w-5" />
                    <span className="text-xs font-medium leading-snug">{module.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Brand mark + title */}
        <div className="flex items-center gap-3">
          <div
            className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-md border shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_8px_rgba(0,0,0,0.16)]"
            style={{
              borderColor: "color-mix(in oklch, var(--border) 70%, #f5c842 30%)",
              background:
                "linear-gradient(140deg, color-mix(in oklch, #f5c842 88%, white 12%) 0%, #f5c842 55%, color-mix(in oklch, #f5c842 82%, black 18%) 100%)",
            }}
          >
            <div className="absolute inset-[3px] rounded-[5px] border border-black/10" />
            <span className="relative text-sm font-extrabold tracking-tight leading-none text-[#111110]">
              S
            </span>
          </div>

          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight">SOSO</span>
            <span className="mt-1 text-[11px] font-normal text-muted-foreground">
              Strategy Operating System for Organizations
            </span>
          </div>
        </div>

        <Separator orientation="vertical" className="h-5 hidden sm:block" />

        {/* Organization name (read-only) */}
        <div className="inline-flex h-8 items-center gap-2 rounded-md border border-border px-3 text-sm font-medium text-muted-foreground">
          <Building2 className="h-3.5 w-3.5 shrink-0" />
          <span className="hidden sm:inline">{orgName}</span>
        </div>
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
                <span className="text-sm font-semibold">{session?.user?.fullName ?? "John Smith"}</span>
                <span className="text-xs text-muted-foreground">{session?.user?.email ?? "john@acmecorp.com"}</span>
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
