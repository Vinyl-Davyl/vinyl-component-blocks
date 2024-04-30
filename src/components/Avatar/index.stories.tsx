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
    imageSrc:
      "https://miro.medium.com/v2/resize:fit:740/1*ooOH6jo8I0ns0J-BE0SAow.jpeg",
  },
};
