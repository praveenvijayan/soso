"use client";

import * as React from "react";
import type { CSSProperties } from "react";
import {
  AlertCircle,
  Bold,
  Italic,
  Layers3,
  Palette,
  PanelsTopLeft,
  Sparkles,
  Terminal,
  Underline,
  ChevronsUpDown,
} from "lucide-react";

import { AppHeader } from "@/components/app-header";
import {
  DepartmentHierarchyCard,
  MembershipRoleAssignmentsCard,
  MembershipWorkspaceCard,
  OrganizationOnboardingSignupBlock,
  OrganizationAndAccessFormsCard,
  OrganizationRegistryCard,
  OrganizationWorkspaceCard,
  PlatformServicesOverview,
  RoleCatalogCard,
  UserDirectoryCard,
} from "@/components/platform-collaboration-components";
import {
  BudgetAlignmentCard,
  CorePillarsCard,
  CrossDomainBlockersCard,
  ExecutiveAlertsCard,
  GovernanceApprovalsCard,
  InitiativePortfolioCard,
  OrganizationSummaryCard,
  RiskHeatmapCard,
  StrategyExecutionCard,
} from "@/components/soso-dashboard-widgets";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "@/components/theme-provider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const showcaseThemeLight = {
  "--background": "38 42% 96%",
  "--foreground": "26 30% 13%",
  "--card": "40 55% 98%",
  "--card-foreground": "26 30% 13%",
  "--popover": "40 55% 98%",
  "--popover-foreground": "26 30% 13%",
  "--primary": "21 70% 38%",
  "--primary-foreground": "44 80% 97%",
  "--secondary": "38 28% 90%",
  "--secondary-foreground": "24 24% 18%",
  "--muted": "35 24% 89%",
  "--muted-foreground": "28 16% 38%",
  "--accent": "42 64% 84%",
  "--accent-foreground": "23 54% 22%",
  "--destructive": "5 72% 48%",
  "--destructive-foreground": "0 0% 98%",
  "--border": "32 28% 80%",
  "--input": "32 28% 84%",
  "--ring": "21 70% 38%",
  "--radius": "1rem",
} as CSSProperties;

const showcaseThemeDark = {
  "--background": "32 18% 8%",
  "--foreground": "38 18% 90%",
  "--card": "32 16% 11%",
  "--card-foreground": "38 18% 90%",
  "--popover": "32 16% 11%",
  "--popover-foreground": "38 18% 90%",
  "--primary": "39 78% 62%",
  "--primary-foreground": "30 20% 10%",
  "--secondary": "31 13% 17%",
  "--secondary-foreground": "38 18% 90%",
  "--muted": "31 12% 16%",
  "--muted-foreground": "34 10% 62%",
  "--accent": "33 18% 20%",
  "--accent-foreground": "39 78% 78%",
  "--destructive": "4 67% 54%",
  "--destructive-foreground": "0 0% 98%",
  "--border": "31 11% 22%",
  "--input": "31 11% 22%",
  "--ring": "39 78% 62%",
  "--radius": "1rem",
} as CSSProperties;

const showcaseHighlights = [
  { label: "Warm editorial palette", icon: Palette },
  { label: "Reusable shadcn composites", icon: Layers3 },
  { label: "Curated system page", icon: PanelsTopLeft },
];

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative mb-10 overflow-hidden rounded-[1.75rem] border border-border/80 bg-card/90 p-6 shadow-[0_18px_60px_rgba(77,52,24,0.08)] backdrop-blur md:p-7">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(90deg,rgba(204,155,89,0.14),rgba(204,155,89,0))]" />
      <div className="relative mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p>
        ) : null}
      </div>
      <Separator className="mb-6 bg-border/70" />
      <div className="flex flex-wrap items-start gap-4">{children}</div>
    </section>
  );
}

export default function UIShowcase() {
  const [progress, setProgress] = React.useState(60);
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme } = useTheme();
  const [systemPrefersDark, setSystemPrefersDark] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setSystemPrefersDark(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const isDark = theme === "dark" || (theme === "device" && systemPrefersDark);
  const showcaseTheme = isDark ? showcaseThemeDark : showcaseThemeLight;
  const pageGlow = isDark
    ? "bg-[radial-gradient(circle_at_top_left,rgba(214,160,87,0.16),transparent_42%),radial-gradient(circle_at_top_right,rgba(133,91,43,0.28),transparent_34%),linear-gradient(180deg,rgba(18,15,12,0.98),rgba(24,19,15,0.94))]"
    : "bg-[radial-gradient(circle_at_top_left,rgba(180,112,43,0.22),transparent_42%),radial-gradient(circle_at_top_right,rgba(231,201,145,0.28),transparent_34%),linear-gradient(180deg,rgba(255,251,244,0.96),rgba(247,240,229,0.9))]";
  const orbLeft = isDark ? "bg-[rgba(214,160,87,0.12)]" : "bg-[rgba(160,93,36,0.08)]";
  const orbRight = isDark ? "bg-[rgba(214,160,87,0.12)]" : "bg-[rgba(235,195,126,0.16)]";
  const heroCardClass = isDark
    ? "overflow-hidden border-border/70 bg-[linear-gradient(135deg,rgba(31,24,18,0.98),rgba(48,36,25,0.92))] shadow-[0_28px_90px_rgba(0,0,0,0.35)]"
    : "overflow-hidden border-border/70 bg-[linear-gradient(135deg,rgba(255,250,244,0.98),rgba(245,234,217,0.92))] shadow-[0_28px_90px_rgba(99,63,25,0.12)]";
  const statsCardClass = isDark
    ? "rounded-[1.5rem] border border-[rgba(214,160,87,0.2)] bg-[rgba(28,22,17,0.9)] p-5 shadow-sm"
    : "rounded-[1.5rem] border border-[rgba(140,99,49,0.18)] bg-[rgba(255,252,247,0.85)] p-5 shadow-sm";
  const statRowClass = isDark
    ? "flex items-center justify-between rounded-[1.25rem] border border-border/70 bg-background/80 px-4 py-3 text-sm"
    : "flex items-center justify-between rounded-[1.25rem] border border-border/70 bg-background/80 px-4 py-3 text-sm";

  return (
    <TooltipProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground" style={showcaseTheme}>
        <AppHeader />
        <ScrollArea className="flex-1">
          <div className="relative overflow-hidden">
            <div className={`pointer-events-none absolute inset-x-0 top-0 h-[34rem] ${pageGlow}`} />
            <div className={`pointer-events-none absolute left-[-7rem] top-44 h-64 w-64 rounded-full blur-3xl ${orbLeft}`} />
            <div className={`pointer-events-none absolute right-[-6rem] top-20 h-72 w-72 rounded-full blur-3xl ${orbRight}`} />

            <div className="relative mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-12">
              <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
                <Card className={heroCardClass}>
                  <CardContent className="grid gap-8 p-7 md:grid-cols-[minmax(0,1fr)_220px] md:p-9">
                    <div className="space-y-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge className="rounded-full bg-primary px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-primary-foreground hover:bg-primary">
                          Curated System View
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Sparkles className="h-4 w-4 text-primary" />
                          <span>Higher contrast, better rhythm, stronger component framing</span>
                        </div>
                      </div>
                      <div>
                        <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-foreground md:text-6xl">
                          shadcn/ui Showcase, redesigned as a premium internal system surface.
                        </h1>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                          The page now uses a warmer Orion-adjacent palette, a more deliberate hero, and framed sections so the primitives read as part of a product language rather than a raw demo inventory.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {showcaseHighlights.map((item) => {
                          const Icon = item.icon;
                          return (
                            <div
                              key={item.label}
                              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/75 px-4 py-2 text-sm text-foreground shadow-sm"
                            >
                              <Icon className="h-4 w-4 text-primary" />
                              <span>{item.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid gap-3 self-start">
                      <div className={statsCardClass}>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Coverage</p>
                        <p className="mt-2 text-4xl font-semibold tracking-tight">40+</p>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          Installed shadcn primitives and composite SOSO widgets in one curated surface.
                        </p>
                      </div>
                      <div className={statRowClass}>
                        <span className="text-muted-foreground">Theme</span>
                        <span className="font-medium text-foreground">{isDark ? "Burnished dark" : "Warm editorial"}</span>
                      </div>
                      <div className={statRowClass}>
                        <span className="text-muted-foreground">Layout</span>
                        <span className="font-medium text-foreground">Section-first</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-end">
                  <ThemeToggle />
                </div>
              </div>

              <Section title="Buttons" description="Action primitives with stronger contrast and less generic presentation.">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button disabled>Disabled</Button>
              </Section>

              <Section title="Status" description="Small display primitives shown inside a stronger editorial shell.">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Section>

              <Section title="Feedback" description="Alerts, skeletons, and progress components benefit from better spacing and visual context.">
                <div className="w-full max-w-xl space-y-3">
                  <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
                  </Alert>
                </div>
                <div className="min-w-[220px] space-y-2 rounded-2xl border border-border/70 bg-background/70 p-4">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[150px]" />
                </div>
                <div className="w-full max-w-md space-y-3 rounded-2xl border border-border/70 bg-background/70 p-4">
                  <Progress value={progress} className="w-full" />
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>
                      -10%
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setProgress(Math.min(100, progress + 10))}>
                      +10%
                    </Button>
                  </div>
                </div>
              </Section>

              <Section title="Inputs" description="Form controls inherit the page-level palette, so shadcn primitives feel branded without forking their APIs.">
                <div className="grid w-full max-w-sm gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="grid w-full max-w-sm gap-3">
                  <Label htmlFor="msg">Message</Label>
                  <Textarea id="msg" placeholder="Type your message here." />
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-3">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms</Label>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-3">
                  <Switch id="airplane" />
                  <Label htmlFor="airplane">Airplane Mode</Label>
                </div>
                <div className="w-64 rounded-2xl border border-border/70 bg-background/70 p-4">
                  <Slider defaultValue={[40]} max={100} step={1} className="w-full" />
                </div>
                <RadioGroup defaultValue="option-one" className="space-y-3 rounded-2xl border border-border/70 bg-background/70 p-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Option One</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Option Two</Label>
                  </div>
                </RadioGroup>
                <Select>
                  <SelectTrigger className="w-[220px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="cherry">Cherry</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex flex-wrap gap-3 rounded-2xl border border-border/70 bg-background/70 p-4">
                  <Toggle>Bold</Toggle>
                  <ToggleGroup type="multiple">
                    <ToggleGroupItem value="bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
                    <ToggleGroupItem value="italic"><Italic className="h-4 w-4" /></ToggleGroupItem>
                    <ToggleGroupItem value="underline"><Underline className="h-4 w-4" /></ToggleGroupItem>
                  </ToggleGroup>
                </div>
                <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
                  <InputOTP maxLength={6}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </Section>

              <Section title="Navigation" description="Navigation primitives grouped together so the page reads like a system guide instead of a test harness.">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem><BreadcrumbLink href="/components">Components</BreadcrumbLink></BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationNext href="#" /></PaginationItem>
                  </PaginationContent>
                </Pagination>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[300px] p-4">
                          <NavigationMenuLink className="block rounded p-2 hover:bg-accent" href="/">Introduction</NavigationMenuLink>
                          <NavigationMenuLink className="block rounded p-2 hover:bg-accent" href="/">Installation</NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[300px] p-4">
                          <NavigationMenuLink className="block rounded p-2 hover:bg-accent" href="/">Alert Dialog</NavigationMenuLink>
                          <NavigationMenuLink className="block rounded p-2 hover:bg-accent" href="/">Button</NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <Tabs defaultValue="preview" className="w-[420px]">
                  <TabsList>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                    <TabsTrigger value="docs">Docs</TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview"><p className="pt-2 text-sm text-muted-foreground">Preview content goes here.</p></TabsContent>
                  <TabsContent value="code"><p className="pt-2 text-sm text-muted-foreground">Code snippets go here.</p></TabsContent>
                  <TabsContent value="docs"><p className="pt-2 text-sm text-muted-foreground">Documentation here.</p></TabsContent>
                </Tabs>
              </Section>

              <Section title="Layout Surfaces" description="Core layout primitives work better once the surrounding page establishes hierarchy, tone, and rhythm.">
                <Card className="w-[360px] border-border/70 shadow-lg shadow-[rgba(99,63,25,0.08)]">
                  <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>Deploy your new project in one click.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Your project will be deployed to the cloud instantly.</p>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                  </CardFooter>
                </Card>
                <Table className="w-full max-w-2xl rounded-2xl border border-border/70 bg-background/70">
                  <TableCaption>List of recent invoices.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
                      { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
                      { id: "INV003", status: "Failed", method: "Bank Transfer", amount: "$350.00" },
                    ].map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.status}</TableCell>
                        <TableCell>{invoice.method}</TableCell>
                        <TableCell className="text-right">{invoice.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="w-[320px] rounded-2xl border border-border/70 bg-background/70 p-4">
                  <AspectRatio ratio={16 / 9}>
                    <div className="flex h-full w-full items-center justify-center rounded-xl bg-muted text-sm text-muted-foreground">
                      16 / 9
                    </div>
                  </AspectRatio>
                </div>
                <ScrollArea className="h-40 w-56 rounded-2xl border border-border/70 bg-background/70 p-4">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="py-1 text-sm">Item {i + 1}</div>
                  ))}
                </ScrollArea>
              </Section>

              <Section title="Menus and Commands" description="Transient surfaces are easier to evaluate when grouped into a coherent systems section.">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>New Tab</MenubarItem>
                      <MenubarItem>New Window</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Edit</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>Undo</MenubarItem>
                      <MenubarItem>Redo</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open Menu</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <ContextMenu>
                  <ContextMenuTrigger className="flex h-[80px] w-[220px] items-center justify-center rounded-2xl border border-dashed text-sm text-muted-foreground">
                    Right-click here
                  </ContextMenuTrigger>
                  <ContextMenuContent className="w-48">
                    <ContextMenuItem>Back</ContextMenuItem>
                    <ContextMenuItem>Forward</ContextMenuItem>
                    <ContextMenuItem>Reload</ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
                <Command className="w-[340px] rounded-2xl border shadow-md">
                  <CommandInput placeholder="Type a command..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>Calendar</CommandItem>
                      <CommandItem>Search Emoji</CommandItem>
                      <CommandItem>Calculator</CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </Section>

              <Section title="Overlays" description="Dialogs and supporting surfaces retain their shadcn APIs, but the page now frames them in a more polished way.">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                      <DialogDescription>Make changes to your profile here.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">Name</Label>
                        <Input id="name" defaultValue="John Doe" className="col-span-3" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Delete Account</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">Open Sheet</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Edit Profile</SheetTitle>
                      <SheetDescription>Make changes to your profile here. Click save when done.</SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                      <Label htmlFor="sheet-name">Name</Label>
                      <Input id="sheet-name" placeholder="Your name" />
                    </div>
                  </SheetContent>
                </Sheet>
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="outline">Open Drawer</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>Move Goal</DrawerTitle>
                        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                      </DrawerHeader>
                      <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a tooltip.</p>
                  </TooltipContent>
                </Tooltip>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link">@shadcn</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@shadcn</h4>
                        <p className="text-sm text-muted-foreground">Creator of shadcn/ui, a set of reusable components.</p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Open Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64">
                    <p className="text-sm">This is a popover. You can place any content here.</p>
                  </PopoverContent>
                </Popover>
              </Section>

              <Section title="Disclosure and Motion" description="Disclosure patterns and carousel surfaces shown with stronger composition and spacing.">
                <Accordion type="single" collapsible className="w-full max-w-md">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
                    <AccordionContent>
                      A set of beautifully designed components built with Radix UI and Tailwind CSS.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. The components follow the WAI-ARIA design patterns.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[320px] space-y-2 rounded-2xl border border-border/70 bg-background/70 p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold">Repositories</h4>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <ChevronsUpDown className="h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
                  <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
                  </CollapsibleContent>
                </Collapsible>
                <Carousel className="w-full max-w-xs">
                  <CarouselContent>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <CarouselItem key={n}>
                        <Card className="border-border/70">
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">{n}</span>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="w-full rounded-2xl border border-border/70 bg-background/70 p-4">
                  <div className="flex items-center gap-4">
                    <span>Left</span>
                    <Separator orientation="vertical" className="h-6" />
                    <span>Right</span>
                  </div>
                  <Separator className="mt-4" />
                </div>
              </Section>

              <section className="relative mb-10 overflow-hidden rounded-[1.75rem] border border-border/80 bg-card/90 p-6 shadow-[0_18px_60px_rgba(77,52,24,0.08)] backdrop-blur md:p-7">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(90deg,rgba(204,155,89,0.14),rgba(204,155,89,0))]" />
                <div className="relative mb-6">
                  <h2 className="text-2xl font-semibold tracking-tight">SOSO Dashboard Components (from refs/index.html)</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                    Recreated from the strategy launchpad reference as reusable shadcn-based composites, then restyled to sit inside the improved showcase surface.
                  </p>
                </div>
                <Separator className="mb-6 bg-border/70" />
                <div className="grid grid-cols-12 gap-4">
                  <OrganizationSummaryCard />
                  <StrategyExecutionCard />
                  <CorePillarsCard />
                  <InitiativePortfolioCard />
                  <BudgetAlignmentCard />
                  <RiskHeatmapCard />
                  <GovernanceApprovalsCard />
                  <CrossDomainBlockersCard />
                  <ExecutiveAlertsCard />
                </div>
              </section>

              <section className="relative mb-10 overflow-hidden rounded-[1.75rem] border border-border/80 bg-card/90 p-6 shadow-[0_18px_60px_rgba(77,52,24,0.08)] backdrop-blur md:p-7">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(90deg,rgba(204,155,89,0.14),rgba(204,155,89,0))]" />
                <div className="relative mb-6">
                  <h2 className="text-2xl font-semibold tracking-tight">Platform & Collaboration Services Components</h2>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                    Reusable frontend building blocks for tenant root organization pages, user identity pages, membership workspaces, role definition catalogs, membership role assignment flows, and department hierarchy management.
                  </p>
                </div>
                <Separator className="mb-6 bg-border/70" />
                <div className="grid grid-cols-12 gap-4">
                  <PlatformServicesOverview />
                  <OrganizationOnboardingSignupBlock />
                  <OrganizationRegistryCard />
                  <OrganizationWorkspaceCard />
                  <UserDirectoryCard />
                  <MembershipWorkspaceCard />
                  <RoleCatalogCard />
                  <MembershipRoleAssignmentsCard />
                  <DepartmentHierarchyCard />
                  <OrganizationAndAccessFormsCard />
                </div>
              </section>
            </div>
          </div>
        </ScrollArea>

        <footer className="bg-background">
          <Separator />
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground">&copy; 2026 Orion IT Solutions. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="link" className="h-auto p-0 text-muted-foreground" asChild>
                <a href="#">Privacy Policy</a>
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground" asChild>
                <a href="#">Terms of Service</a>
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground" asChild>
                <a href="#">Help Center</a>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}
