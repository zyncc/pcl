import Link from "next/link";
import {
  Users,
  Heart,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  FileText,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminDashboard() {
  return (
    <div className="space-y-8 container mx-auto px-3 my-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Welcome back, Admin</h2>
          <p className="text-muted-foreground">
            Here&apos;s what&apos;s happening with your organization today.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/causes/new">
            <Plus className="h-4 w-4 mr-2" />
            New Cause
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="py-6">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Donations
            </CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹24,56,789</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +20.1%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card className="py-6">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Donors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +15.3%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card className="py-6">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Causes</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +2
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card className="py-6">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Conversion Rate
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.3%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500 inline-flex items-center">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                -0.5%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recent">
        <TabsList>
          <TabsTrigger value="recent">Recent Donations</TabsTrigger>
          <TabsTrigger value="causes">Active Causes</TabsTrigger>
        </TabsList>
        <TabsContent value="recent" className="space-y-4">
          <Card className="py-6">
            <CardHeader>
              <CardTitle>Recent Donations</CardTitle>
              <CardDescription>
                You received 25 donations in the last 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Rahul Sharma
                    </p>
                    <p className="text-sm text-muted-foreground">
                      rahul.sharma@example.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">₹5,000</div>
                </div>
                <div className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Priya Patel
                    </p>
                    <p className="text-sm text-muted-foreground">
                      priya.patel@example.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">₹10,000</div>
                </div>
                <div className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Amit Kumar
                    </p>
                    <p className="text-sm text-muted-foreground">
                      amit.kumar@example.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">₹2,500</div>
                </div>
                <div className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Neha Singh
                    </p>
                    <p className="text-sm text-muted-foreground">
                      neha.singh@example.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">₹7,500</div>
                </div>
                <div className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Vikram Mehta
                    </p>
                    <p className="text-sm text-muted-foreground">
                      vikram.mehta@example.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">₹15,000</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="causes" className="space-y-4">
          <Card className="py-6">
            <CardHeader>
              <CardTitle>Active Causes</CardTitle>
              <CardDescription>
                You have 12 active causes with ongoing fundraising
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Education for All
                    </p>
                    <div className="flex items-center pt-1">
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: "65%" }}
                        />
                      </div>
                      <span className="ml-2 text-xs text-muted-foreground">
                        65%
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto font-medium">₹9,75,000</div>
                </div>
                <div className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Clean Water Initiative
                    </p>
                    <div className="flex items-center pt-1">
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: "78%" }}
                        />
                      </div>
                      <span className="ml-2 text-xs text-muted-foreground">
                        78%
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto font-medium">₹15,60,000</div>
                </div>
                <div className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Rural Healthcare
                    </p>
                    <div className="flex items-center pt-1">
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: "42%" }}
                        />
                      </div>
                      <span className="ml-2 text-xs text-muted-foreground">
                        42%
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto font-medium">₹7,56,000</div>
                </div>
                <div className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Flood Relief
                    </p>
                    <div className="flex items-center pt-1">
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: "89%" }}
                        />
                      </div>
                      <span className="ml-2 text-xs text-muted-foreground">
                        89%
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto font-medium">₹10,68,000</div>
                </div>
                <div className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Women&apos;s Empowerment
                    </p>
                    <div className="flex items-center pt-1">
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: "35%" }}
                        />
                      </div>
                      <span className="ml-2 text-xs text-muted-foreground">
                        35%
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto font-medium">₹3,50,000</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
