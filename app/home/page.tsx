"use client";

import type React from "react";

import { useState } from "react";
import {
  AtomIcon,
  Beaker,
  BookOpen,
  ChevronDown,
  Download,
  FileText,
  History,
  Home,
  Layers,
  Maximize2,
  Minimize2,
  RotateCcw,
  Save,
  Search,
  Settings,
  Share2,
  Star,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { MoleculeViewer } from "@/components/molecule-viewer";
import { MoleculeInfo } from "@/components/molecule-info";

export default function AppPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentMolecule, setCurrentMolecule] = useState("Benzene");
  const [is3DMode, setIs3DMode] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentMolecule(searchQuery);
      setSearchQuery("");
    }
  };

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 border-r border-emerald-900 flex flex-col">
        <div className="p-4 border-b border-emerald-900 flex items-center gap-2">
          <AtomIcon className="h-6 w-6 text-emerald-400" />
          <span className="text-xl font-bold">MolVisonary</span>
        </div>

        <div className="p-4">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search molecules..."
              className="bg-emerald-950/50 border-emerald-800 focus-visible:ring-emerald-500 text-white placeholder:text-emerald-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              size="icon"
              variant="ghost"
              className="absolute right-0 top-0 h-full text-emerald-500 hover:text-emerald-400 hover:bg-transparent"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>

        <nav className="flex-1 overflow-auto py-4">
          <div className="px-4 mb-2 text-xs font-semibold text-emerald-500 uppercase tracking-wider">
            Main
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start px-4 py-2 text-emerald-300 hover:text-white hover:bg-emerald-900/40"
          >
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start px-4 py-2 text-emerald-300 hover:text-white hover:bg-emerald-900/40"
          >
            <Star className="mr-2 h-4 w-4" />
            Favorites
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start px-4 py-2 text-emerald-300 hover:text-white hover:bg-emerald-900/40"
          >
            <History className="mr-2 h-4 w-4" />
            Recent
          </Button>

          <div className="px-4 mt-6 mb-2 text-xs font-semibold text-emerald-500 uppercase tracking-wider">
            Libraries
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start px-4 py-2 text-emerald-300 hover:text-white hover:bg-emerald-900/40"
          >
            <Beaker className="mr-2 h-4 w-4" />
            Organic
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start px-4 py-2 text-emerald-300 hover:text-white hover:bg-emerald-900/40"
          >
            <Layers className="mr-2 h-4 w-4" />
            Inorganic
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start px-4 py-2 text-emerald-300 hover:text-white hover:bg-emerald-900/40"
          >
            <FileText className="mr-2 h-4 w-4" />
            Biochemical
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start px-4 py-2 text-emerald-300 hover:text-white hover:bg-emerald-900/40"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Educational
          </Button>
        </nav>

        <div className="p-4 border-t border-emerald-900">
          <Button
            variant="ghost"
            className="w-full justify-start px-4 py-2 text-emerald-300 hover:text-white hover:bg-emerald-900/40"
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="h-16 border-b border-emerald-900 flex items-center justify-between px-6">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold">{currentMolecule}</h1>
            <div className="ml-4 flex items-center gap-2 text-sm text-emerald-400">
              <span>C₆H₆</span>
              <span>•</span>
              <span>MW: 78.11 g/mol</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="border-emerald-700 text-emerald-400 hover:bg-emerald-900/40"
            >
              <Save className="mr-2 h-4 w-4" />
              Save
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-emerald-700 text-emerald-400 hover:bg-emerald-900/40"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-emerald-700 text-emerald-400 hover:bg-emerald-900/40"
            >
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>

            <div className="ml-4 h-8 w-px bg-emerald-800"></div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Avatar className="h-8 w-8 border border-emerald-800">
                    <AvatarFallback className="bg-emerald-900 text-emerald-200">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-4 w-4 text-emerald-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-black border-emerald-900"
              >
                <DropdownMenuItem className="focus:bg-emerald-900/40 focus:text-white">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-emerald-900/40 focus:text-white">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-emerald-900" />
                <DropdownMenuItem className="focus:bg-emerald-900/40 focus:text-white">
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 overflow-hidden flex">
          {/* Molecule Viewer */}
          <div className="flex-1 relative bg-gradient-to-b from-emerald-950/30 to-black">
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 border-emerald-800 bg-black/50 text-emerald-400 hover:bg-emerald-900/40"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 border-emerald-800 bg-black/50 text-emerald-400 hover:bg-emerald-900/40"
              >
                {is3DMode ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </Button>
            </div>

            <div className="absolute top-4 right-4 z-10 flex items-center gap-4 bg-black/50 px-3 py-1.5 rounded-full border border-emerald-800">
              <span className="text-sm font-medium">2D</span>
              <Switch
                checked={is3DMode}
                onCheckedChange={setIs3DMode}
                className="data-[state=checked]:bg-emerald-600"
              />
              <span className="text-sm font-medium">3D</span>
            </div>

            <MoleculeViewer molecule={currentMolecule} is3D={is3DMode} />
          </div>

          {/* Right Panel */}
          <div className="w-80 border-l border-emerald-900 overflow-y-auto">
            <Tabs defaultValue="properties" className="w-full">
              <TabsList className="w-full grid grid-cols-3 bg-black border-b border-emerald-900 rounded-none h-12">
                <TabsTrigger
                  value="properties"
                  className="data-[state=active]:bg-emerald-900/20 data-[state=active]:text-emerald-400 rounded-none"
                >
                  Properties
                </TabsTrigger>
                <TabsTrigger
                  value="structure"
                  className="data-[state=active]:bg-emerald-900/20 data-[state=active]:text-emerald-400 rounded-none"
                >
                  Structure
                </TabsTrigger>
                <TabsTrigger
                  value="calculations"
                  className="data-[state=active]:bg-emerald-900/20 data-[state=active]:text-emerald-400 rounded-none"
                >
                  Calculations
                </TabsTrigger>
              </TabsList>

              <TabsContent value="properties" className="p-4 space-y-6 m-0">
                <MoleculeInfo molecule={currentMolecule} />
              </TabsContent>

              <TabsContent value="structure" className="p-4 space-y-6 m-0">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-emerald-400 mb-2">
                      Bond Angles
                    </h3>
                    <div className="bg-emerald-950/30 p-3 rounded border border-emerald-900/50">
                      <div className="flex justify-between text-sm mb-1">
                        <span>C-C-C</span>
                        <span>120°</span>
                      </div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>C-C-H</span>
                        <span>120°</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>H-C-H</span>
                        <span>120°</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-emerald-400 mb-2">
                      Bond Lengths
                    </h3>
                    <div className="bg-emerald-950/30 p-3 rounded border border-emerald-900/50">
                      <div className="flex justify-between text-sm mb-1">
                        <span>C-C</span>
                        <span>1.40 Å</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>C-H</span>
                        <span>1.09 Å</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-emerald-400 mb-2">
                      Hybridization
                    </h3>
                    <div className="bg-emerald-950/30 p-3 rounded border border-emerald-900/50">
                      <div className="flex justify-between text-sm">
                        <span>Carbon</span>
                        <span>sp²</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="calculations" className="p-4 space-y-6 m-0">
                <div>
                  <h3 className="text-sm font-medium text-emerald-400 mb-2">
                    Energy
                  </h3>
                  <div className="bg-emerald-950/30 p-3 rounded border border-emerald-900/50">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Total Energy</span>
                      <span>-232.15 kJ/mol</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>HOMO-LUMO Gap</span>
                      <span>6.84 eV</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-emerald-400 mb-2">
                    Optimization
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-emerald-800 text-emerald-400 hover:bg-emerald-900/40"
                      >
                        Force Field
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-emerald-800 text-emerald-400 hover:bg-emerald-900/40"
                      >
                        Conjugate Gradient
                      </Button>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Steps per frame</span>
                        <span className="text-sm text-emerald-400">4</span>
                      </div>
                      <Slider
                        defaultValue={[4]}
                        max={10}
                        step={1}
                        className="[&>span]:bg-emerald-600"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-emerald-400 mb-2">
                    Energy Graph
                  </h3>
                  <div className="bg-emerald-950/30 p-3 rounded border border-emerald-900/50 h-40 flex items-center justify-center">
                    <div className="w-full h-full relative">
                      <svg viewBox="0 0 300 100" className="w-full h-full">
                        <line
                          x1="0"
                          y1="90"
                          x2="300"
                          y2="90"
                          stroke="rgba(52, 211, 153, 0.5)"
                          strokeWidth="1"
                        />
                        <line
                          x1="10"
                          y1="0"
                          x2="10"
                          y2="90"
                          stroke="rgba(52, 211, 153, 0.5)"
                          strokeWidth="1"
                        />
                        <polyline
                          points="10,80 50,70 100,50 150,40 200,35 250,32 300,30"
                          fill="none"
                          stroke="rgb(52, 211, 153)"
                          strokeWidth="2"
                        />
                        <text
                          x="150"
                          y="98"
                          fontSize="8"
                          textAnchor="middle"
                          fill="rgba(52, 211, 153, 0.8)"
                        >
                          Energy/T
                        </text>
                        <text
                          x="5"
                          y="45"
                          fontSize="8"
                          textAnchor="middle"
                          transform="rotate(-90, 5, 45)"
                          fill="rgba(52, 211, 153, 0.8)"
                        >
                          kJ/mol
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
