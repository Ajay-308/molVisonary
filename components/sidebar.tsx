"use client";
import React, { useState } from "react";
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
const sidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentMolecule, setCurrentMolecule] = useState("Benzene");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentMolecule(searchQuery);
      setSearchQuery("");
    }
  };
  return (
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
  );
};

export default sidebar;
