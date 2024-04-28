import React, { HTMLAttributes, ReactElement } from "react";

interface props {
  tabHeader: string[];
  tabHeaderAttributes?: HTMLAttributes<HTMLDivElement>;
  tabHeaderTitleAttributes?: HTMLAttributes<HTMLDivElement>;
  tabContent: ReactElement[];
  tabContentAttributes?: HTMLAttributes<HTMLDivElement>;
}

export const Tabs = ({
  tabHeader,
  tabContent,
  tabHeaderAttributes,
  tabContentAttributes,
  tabHeaderTitleAttributes,
}: props) => {
  console.log("tabHeader", tabHeader, " \n tabContent ", tabContent);
  return (
    <div>
      <div className="display-flex justify-between">
        {tabHeader?.map((item) => (
          <div className="" {...tabHeaderAttributes}>
            <p {...tabHeaderTitleAttributes}>{item}</p>
          </div>
        ))}
      </div>
      <div className="display-flex justify-between">
        {tabContent?.map((item) => <div {...tabContentAttributes}>{item}</div>)}
      </div>
    </div>
  );
};
