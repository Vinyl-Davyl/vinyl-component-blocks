import React from "react";
import { Box, Stack } from "@/components/Layout";
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
} from "@/components";

export const LoginForm = () => {
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
        <Avatar imageSrc="https://avatars2.githubusercontent.com/u/132554" />
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
        <Modal children={<p>Hello</p>} />
        <OverviewCard percentage={75} percentageText="Transaction Details" />
        <Spinner />
        <Tabs />
      </Stack>
    </Box>
  );
};
