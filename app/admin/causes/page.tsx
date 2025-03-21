"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash,
  Eye,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const causes = [
  {
    id: "1",
    title: "Education for All",
    category: "Education",
    raised: 850000,
    goal: 1500000,
    status: "active",
    featured: true,
    createdAt: "2023-01-15",
  },
  {
    id: "2",
    title: "Clean Water Initiative",
    category: "Water",
    raised: 1200000,
    goal: 2000000,
    status: "active",
    featured: true,
    createdAt: "2023-02-10",
  },
  {
    id: "3",
    title: "Rural Healthcare Access",
    category: "Healthcare",
    raised: 750000,
    goal: 1800000,
    status: "active",
    featured: true,
    createdAt: "2023-03-05",
  },
  {
    id: "4",
    title: "Flood Relief & Rehabilitation",
    category: "Disaster Relief",
    raised: 950000,
    goal: 1200000,
    status: "active",
    featured: true,
    createdAt: "2023-06-15",
  },
  {
    id: "5",
    title: "Women's Skill Development",
    category: "Empowerment",
    raised: 650000,
    goal: 1000000,
    status: "active",
    featured: false,
    createdAt: "2023-04-20",
  },
  {
    id: "6",
    title: "Child Nutrition Program",
    category: "Healthcare",
    raised: 450000,
    goal: 800000,
    status: "active",
    featured: false,
    createdAt: "2023-05-12",
  },
  {
    id: "7",
    title: "Digital Literacy for Youth",
    category: "Education",
    raised: 350000,
    goal: 700000,
    status: "active",
    featured: false,
    createdAt: "2023-07-08",
  },
  {
    id: "8",
    title: "Elderly Care & Support",
    category: "Healthcare",
    raised: 280000,
    goal: 600000,
    status: "active",
    featured: false,
    createdAt: "2023-08-15",
  },
  {
    id: "9",
    title: "Tree Plantation Drive",
    category: "Environment",
    raised: 180000,
    goal: 400000,
    status: "draft",
    featured: false,
    createdAt: "2023-09-01",
  },
  {
    id: "10",
    title: "Vocational Training Center",
    category: "Education",
    raised: 0,
    goal: 1200000,
    status: "draft",
    featured: false,
    createdAt: "2023-09-10",
  },
];

export default function CausesPage() {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setSelectedCause(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    console.log(`Deleting cause with ID: ${selectedCause}`);
    setDeleteDialogOpen(false);
  };

  return (
    <div className="space-y-6 container mx-auto px-3 my-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Causes</h2>
          <p className="text-muted-foreground">
            Manage your fundraising causes and campaigns.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/causes/new">
            <Plus className="h-4 w-4 mr-2" />
            New Cause
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search causes..." className="pl-9" />
        </div>
        <div className="flex gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="water">Water</SelectItem>
              <SelectItem value="disaster">Disaster Relief</SelectItem>
              <SelectItem value="empowerment">Empowerment</SelectItem>
              <SelectItem value="environment">Environment</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Raised</TableHead>
              <TableHead className="text-right">Goal</TableHead>
              <TableHead className="text-right">Progress</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {causes.map((cause) => (
              <TableRow key={cause.id}>
                <TableCell className="font-medium">{cause.title}</TableCell>
                <TableCell>{cause.category}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      cause.status === "active" ? "default" : "secondary"
                    }
                  >
                    {cause.status === "active" ? "Active" : "Draft"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  ₹{(cause.raised / 100000).toFixed(1)}L
                </TableCell>
                <TableCell className="text-right">
                  ₹{(cause.goal / 100000).toFixed(1)}L
                </TableCell>
                <TableCell className="text-right">
                  {Math.round((cause.raised / cause.goal) * 100)}%
                </TableCell>
                <TableCell>
                  {cause.featured ? (
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-primary border-primary"
                    >
                      Featured
                    </Badge>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </TableCell>
                <TableCell>
                  {new Date(cause.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link
                          href={`/causes/${cause.id}`}
                          className="cursor-pointer"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href={`/admin/causes/${cause.id}/edit`}
                          className="cursor-pointer"
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-destructive focus:text-destructive cursor-pointer"
                        onClick={() => handleDeleteClick(cause.id)}
                      >
                        <Trash className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Are you sure you want to delete this cause?
            </DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the
              cause and all associated data.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteConfirm}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
