import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta: Meta = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["tiny", "small", "medium", "large"],
    },
  },
  parameters: {
    description: {
      component: "Displays an image that represents a user or organization.",
    },
  },
  tags: ["autodocs"],
}; 

// Export the metadata as default
export default meta;

type Story = StoryObj<typeof meta>;


export const Primary: Story = {
args: {
  imageSrc: "https://avatars2.githubusercontent.com/u/132554",
},
}