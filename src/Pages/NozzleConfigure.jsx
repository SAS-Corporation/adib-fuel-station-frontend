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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownSelector } from "@/Shared/DropdownSelector";

const NozzleConfigure = () => {
  const fuelOptions = [
    { value: "petrol", label: "Petrol" },
    { value: "diesel", label: "Diesel" },
    { value: "cng", label: "CNG" },
  ];
  const tankOptions = [
    { value: "tank1", label: "Tank 1 - 10,000L" },
    { value: "tank2", label: "Tank 2 - 15,000L" },
    { value: "tank3", label: "Tank 3 - 20,000L" },
  ];
  const dispenserOptions = [
    { value: "dispenser1", label: "Dispenser 1 - Tank A" },
    { value: "dispenser2", label: "Dispenser 2 - Tank B" },
    { value: "dispenser3", label: "Dispenser 3 - Tank C" },
  ];

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#c30505] font-semibold">
              Nozzle Configuration
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Tabs defaultValue="fuel-types" className="w-full max-w-2xl mt-8">
        <TabsList className="grid grid-cols-4 gap-4 mb-4">
          <TabsTrigger value="fuel-types">Fuel Types</TabsTrigger>
          <TabsTrigger value="tanks">Tanks</TabsTrigger>
          <TabsTrigger value="dispensers">Dispensers</TabsTrigger>
          <TabsTrigger value="nozzles">Nozzles</TabsTrigger>
        </TabsList>

        {/* Fuel Types Tab */}
        <TabsContent value="fuel-types">
          <Card>
            <CardHeader>
              <CardTitle>Fuel Types</CardTitle>
              <CardDescription>Manage fuel types and pricing.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fuel-name">Fuel Name</Label>
                <Input id="fuel-name" placeholder="Enter fuel type name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price per Unit</Label>
                <Input id="price" type="number" placeholder="Enter price" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Fuel Type</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Tanks Tab */}
        <TabsContent value="tanks">
          <Card>
            <CardHeader>
              <CardTitle>Tanks</CardTitle>
              <CardDescription>
                Manage tanks and their capacities.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tank-name">Tank Name</Label>
                <Input id="tank-name" placeholder="Enter tank name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacity">Capacity</Label>
                <Input
                  id="capacity"
                  type="number"
                  placeholder="Enter capacity"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="current-volume">Current Volume</Label>
                <Input
                  id="current-volume"
                  type="number"
                  placeholder="Enter current volume"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fule-type">Fuel Type</Label>
                <DropdownSelector
                  options={fuelOptions}
                  placeholder="Select a fuel type..."
                  onSelect={(selected) => console.log("Selected:", selected)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Tank</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Dispensers Tab */}
        <TabsContent value="dispensers">
          <Card>
            <CardHeader>
              <CardTitle>Dispensers</CardTitle>
              <CardDescription>Manage fuel dispensers.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="dispenser-name">Dispenser Name</Label>
                <Input id="dispenser-name" placeholder="Enter dispenser name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tank-id">Tank Type</Label>
                <DropdownSelector
                  options={tankOptions}
                  placeholder="Select a tank..."
                  onSelect={(selected) =>
                    console.log("Selected tank:", selected)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Input id="status" type="" placeholder="Enter status of tank" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Dispenser</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Nozzles Tab */}
        <TabsContent value="nozzles">
          <Card>
            <CardHeader>
              <CardTitle>Nozzles</CardTitle>
              <CardDescription>Manage fuel nozzles.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nozzle-name">Nozzle Name</Label>
                <Input id="nozzle-name" placeholder="Enter nozzle name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Input id="status" type="" placeholder="Enter status of tank" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dispenser-id">Dispenser Type</Label>
                <DropdownSelector
                  options={dispenserOptions}
                  placeholder="Select a dispenser..."
                  onSelect={(selected) =>
                    console.log("Selected dispenser:", selected)
                  }
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Nozzle</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NozzleConfigure;
