"use client";

import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

type FormValues = {
  country: string;
  state: string;
  city: string;
  user: string;
  title: string;
  message: string;
};

export default function NotificationBroadcastForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      country: "",
      state: "",
      city: "",
      user: "",
      title: "",
      message: "",
    },
  });

  const countryOptions = [
    { label: "India", value: "india" },
    { label: "USA", value: "usa" },
  ];
  const stateOptions = [
    { label: "Maharashtra", value: "maharashtra" },
    { label: "Gujarat", value: "gujarat" },
  ];
  const cityOptions = [
    { label: "Mumbai", value: "mumbai" },
    { label: "Pune", value: "pune" },
  ];
  const userOptions = [
    { label: "User 1", value: "user1" },
    { label: "User 2", value: "user2" },
  ];

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 items-end">
          {/* Row 1 */}
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Country:"
                placeholder="--Select Country--"
                size="sm"
                options={countryOptions}
                onChange={val => field.onChange(val)}
              />
            )}
          />
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="State:"
                placeholder="--Select State--"
                size="sm"
                options={stateOptions}
                onChange={val => field.onChange(val)}
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="City:"
                placeholder="--Select City--"
                size="sm"
                options={cityOptions}
                onChange={val => field.onChange(val)}
              />
            )}
          />

          {/* Row 2 */}
          <Controller
            name="user"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Dropdown
                {...field}
                // label={<><span className="text-red-500">*</span>User:</>}
                label="User"
                placeholder="--Select User--"
                size="sm"
                options={userOptions}
                onChange={val => field.onChange(val)}
                required
              />
            )}
          />
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                // label={<><span className="text-red-500">*</span>Title:</>}
                label="Title"
                placeholder="Title"
                size="sm"
                required
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Message:"
                placeholder="Message"
                size="sm"
              />
            )}
          />
        </div>
        <div className="flex justify-end gap-4 mt-4">
          <Button variant="outline" type="button" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit" className="bg-[#445E94] text-white px-6">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
