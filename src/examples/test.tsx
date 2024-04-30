import React from "react";
import {
  Button,
  Input,
  Typography,
  Avatar,
  Card,
  Checkbox,
  Modal,
  OverviewCard,
  Spinner,
  Tabs,
  Box,
  Stack,
} from "@/components";

export const test = () => {
  return (
    <Box className="px-8 py-12 border border-gray-300 rounded-xl">
      <Stack>
        <Typography
          as="h2"
          weight={"bold"}
          align={"center"}
          size={"3xl"}
          className="mb-2"
        >
          Login
        </Typography>
        <Avatar imageSrc="https://miro.medium.com/v2/resize:fit:740/1*ooOH6jo8I0ns0J-BE0SAow.jpeg" />
        <Typography
          as="span"
          emphasis={"low"}
          size={"sm"}
          align={"center"}
          className="mb-8"
        >
          Please enter your credentials to login
        </Typography>

        <Typography
          as="label"
          htmlFor="username"
          size={"sm"}
          weight={"medium"}
          className="mb-1.5"
        >
          Username
        </Typography>
        <Input
          type="text"
          id="username"
          placeholder="Username"
          className="mb-4"
        />

        <Typography
          as="label"
          htmlFor="password"
          size={"sm"}
          weight={"medium"}
          className="mb-1.5"
        >
          Password
        </Typography>
        <Input id="password" type="password" placeholder={"Password"} />

        <Button
          type="submit"
          variant={"solid"}
          size={"lg"}
          colorscheme={"primary"}
          className="mt-10"
        >
          Login
        </Button>
        <Card>
          <Typography
            as="label"
            htmlFor="username"
            size={"sm"}
            weight={"medium"}
            className="mb-1.5"
          >
            Username
          </Typography>
        </Card>
        <Checkbox id="1" name="checkmark" />
        <Modal
          children={
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              voluptatibus quis voluptatem quos illo magnam sit, eaque eum,
              optio, ipsum culpa ex earum nesciunt minus velit veniam accusamus.
              Laboriosam, enim.
            </p>
          }
        />
        <OverviewCard percentage={75} percentageText="Transaction Details" />
        <Spinner />
        <Tabs
          tabHeader={["First Tab", "Second Tab"]}
          tabContent={[<p>First Tab</p>, <p>Second Tab</p>]}
        />
      </Stack>
    </Box>
  );
};
