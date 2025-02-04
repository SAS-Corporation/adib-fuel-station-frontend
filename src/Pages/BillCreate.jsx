import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { DropdownSelector } from "@/Shared/DropdownSelector";

const BillCreate = () => {
  const nozzleOptions = [
    { value: "nozzle1", label: "nozzle 1 - Tank A" },
    { value: "nozzle2", label: "nozzle 2 - Tank B" },
    { value: "nozzle3", label: "nozzle 3 - Tank C" },
  ];
  const customerOptions = [
    { value: "customer1", label: "John Doe - +880123456789" },
    { value: "customer2", label: "Jane Smith - +880987654321" },
    { value: "customer3", label: "Alice Johnson - +880456789123" }
  ];
  
  return (
    <div className="-z-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#c30505] font-semibold">
              Bill Create
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="lg:flex justify-between gap-10 py-10 mt-2">
        <div className="border px-10 py-10 lg:w-[65%] grid xl:grid-cols-2 rounded-lg">
          <div className="pr-4">
            <h3 className="text-xl font-semibold mb-2">Fule Station</h3>
            <hr />
            <div className="space-y-2">
              <Label htmlFor="nozzle-id">Nozzle Type</Label>
              <DropdownSelector
                options={nozzleOptions}
                placeholder="Select a nozzle..."
                onSelect={(selected) =>
                  console.log("Selected nozzle:", selected)
                }
              />
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="capacity">Volume (L)</Label>
              <Input id="volume" type="number" placeholder="Enter fule volume" />
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="capacity">Price</Label>
              <Input id="price" type="number" placeholder="Price" />
            </div>
            <h3 className="text-xl font-semibold my-2">Service Station</h3>
            <hr />
            <div className="space-y-2">
              <Label htmlFor="service-name">Service Name</Label>
              <DropdownSelector
                options={nozzleOptions}
                placeholder="Select a service..."
                onSelect={(selected) =>
                  console.log("Selected service:", selected)
                }
              />
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="charge">Service Charge</Label>
              <Input id="service-charge" type="number" placeholder="Service charge" />
            </div>
          </div>
          <div className="lg:border-l lg:pl-4 border-[#fbe9d3] mt-3 lg:mt-0">
          <h3 className="text-xl font-semibold mb-2">Product Station</h3>
            <hr />
            <div className="space-y-2">
              <Label htmlFor="product-name">Product Name</Label>
              <DropdownSelector
                options={nozzleOptions}
                placeholder="Select a product..."
                onSelect={(selected) =>
                  console.log("Selected product:", selected)
                }
              />
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="price">Product Price</Label>
              <Input id="product-price" type="number" placeholder="Product Price" />
            </div>
            <div className="space-y-2 mt-5 flex justify-between items-center">
              <Label htmlFor="capacity">Customer List</Label>
              <Button size="sm" className="xl:hidden block">Add New</Button>
            </div>
            <div className="flex justify-between gap-2 mt-2 items-center align-middle">
            <DropdownSelector
                options={customerOptions}
                placeholder="Select customer"
                onSelect={(selected) =>
                  console.log("Selected nozzle:", selected)
                }
                className=""
              />
              <Button size="sm" className="hidden xl:block">Add New</Button>
            </div>
          </div>
        </div>
        <div className="border py-10 lg:w-[35%]"></div>
      </div>
    </div>
  );
};

export default BillCreate;
