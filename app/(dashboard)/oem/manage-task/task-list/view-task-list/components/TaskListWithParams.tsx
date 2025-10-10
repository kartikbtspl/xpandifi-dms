"use client";
import ViewTaskListForm from './ViewTaskListForm';
import { useSearchParams } from 'next/navigation';

export default function TaskListWithParams() {
  const params = useSearchParams();
  const getParam = (key: string): string => params.get(key) || "";

  const initialValues = {
    taskId: getParam("taskId"),
    taskType: getParam("taskType"),
    taskStatus: getParam("taskStatus"),
    taskDetails: getParam("taskDetails"),
    taskDate: getParam("taskDate"),
  };

  return <ViewTaskListForm initialValues={initialValues} />;
}
