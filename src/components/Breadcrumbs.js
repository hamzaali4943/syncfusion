import React from "react";
import {
  BreadcrumbComponent,
  BreadcrumbItemDirective,
  BreadcrumbItemsDirective,
} from "@syncfusion/ej2-react-navigations";
import {
  ButtonComponent,
  ChipListComponent,
} from "@syncfusion/ej2-react-buttons";

const BreadCrumbs = () => {
  return (
    <div className="mb-20 flex flex-row flex-wrap justify-between">
      <div>
        <p className="text-xl font-light tracking-wide">
          Penetrate US market and realize 50% growth..
        </p>
        <div id="breadcrumb-control" className="-ml-2">
          <BreadcrumbComponent enableNavigation={false}>
            <BreadcrumbItemsDirective>
              <BreadcrumbItemDirective
                text="Components"
                url="https://ej2.syncfusion.com/react/demos/#/material/grid/overview/"
              />
              <BreadcrumbItemDirective
                text="Navigations"
                url="https://ej2.syncfusion.com/react/demos/#/material/menu/default"
              />
              <BreadcrumbItemDirective
                text="Breadcrumb"
                url="./breadcrumb/default"
              />
            </BreadcrumbItemsDirective>
          </BreadcrumbComponent>
        </div>
      </div>
      <div className="flex items-center flex-wrap gap-2">
        <ChipListComponent text="Janet Leverling"></ChipListComponent>
        <ChipListComponent text="Janet Leverling"></ChipListComponent>
        <ButtonComponent cssClass="w-20 capitalize shadow-none hover:shadow-none focus:shadow-none bg-blue-100 hover:bg-blue-100 focus:bg-blue-100 text-blue-200 hover:text-blue-200 focus:text-blue-200 text-xs h-7 rounded-none py-0">
          Overall
        </ButtonComponent>
        <ButtonComponent cssClass="w-20 capitalize shadow-none hover:shadow-none focus:shadow-none bg-transparent hover:bg-transparent focus:bg-transparent border border-gray-100 hover:border-gray-100 focus:border-gray-100 text-gray-100 hover:text-gray-100 focus:text-gray-100 text-xs h-7 rounded-none py-0">
          Risk
        </ButtonComponent>
        <ButtonComponent cssClass="w-20 capitalize shadow-none hover:shadow-none focus:shadow-none bg-red-100 hover:bg-red-100 focus:bg-red-100 text-red-200 hover:text-red-200 focus:text-red-200 text-xs h-7 rounded-none py-0">
          Impact
        </ButtonComponent>
      </div>
    </div>
  );
};
export default BreadCrumbs;
