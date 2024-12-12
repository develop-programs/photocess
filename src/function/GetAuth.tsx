"use client";
import { fetchData } from "@/Redux/reducers/AuthSlice";
import { AppDispatch } from "@/Redux/store";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";

export default function GetAuth() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: session } = useSession();
  if (session) {
    dispatch(fetchData(session.user.email));
  }
  return null;
}
