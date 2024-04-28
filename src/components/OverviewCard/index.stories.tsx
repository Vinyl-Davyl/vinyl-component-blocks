import { Meta, StoryObj } from "@storybook/react";
import { OverviewCard } from "./index";

const meta: Meta = {
  title: "Components/OverviewCard",
  component: OverviewCard,
  tags: ["autodocs"],
};

// Export the metadata as default
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { percentageText: "No of Transactions", percentage: 30 },
};
