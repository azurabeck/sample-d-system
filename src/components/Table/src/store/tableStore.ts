import { create } from "zustand";

export interface CaseAttribute {
  name: string;
  value: string;
}

export interface AnyObject {
  [key: string]: any;
}

export interface DashboardRecord {
  id: string;
  currentActivity: string;
  status: number;
  createdOn: string;
  caseAttribute: CaseAttribute[];
  editedAt?: string | null;
  editedBy?: string | null;
}


type IDropdownOptions = "pending" | "completed" | null;

interface Data {
  record: DashboardRecord[];
}

export interface DashboardData {
  code: number;
  data: Data;
}

export interface IDashboardStore {
  filter: string;
  myPendingApprovalBadger: number;
  allRequestsBadger: number;
  createdOnDataPeriodFilter: string | undefined;
  taskDropdown: IDropdownOptions;
  statusAdvantageSearch: IDropdownOptions;
  shwoHeaderSearch: boolean;
  isTableRefreash: boolean;
  myPendingApprovalData: DashboardData;
  tasksWithRequestData: DashboardData;
  allRequestsData: DashboardData;
  setFilter: (payload: string) => void;
  setMyPendingApprovalBadger: (myPendingApprovalBadger: number) => void;
  setAllRequestsBadger: (allRequestsBadger: number) => void;
  setCreatedOnDataPeriodFilter: (
    createdOnDataPeriodFilter: string | undefined
  ) => void;
  setTaskDropdown: (taskDropdown: IDropdownOptions) => void;
  setStatusAdvantageSearch: (statusAdvantageSearch: IDropdownOptions) => void;
  setShwoHeaderSearch: (shwoHeaderSearch: boolean) => void;
  setIsTableRefreash: (isTableRefreash: boolean) => void;
  setMyPendingApprovalData: (myPendingApprovalData: DashboardData) => void;
  setTasksWithRequestData: (tasksWithRequestData: DashboardData) => void;
  setAllRequestsData: (allRequestsData: DashboardData) => void;
}

export const useDashboardStore = create<IDashboardStore>((set) => ({
  filter: "",
  myPendingApprovalBadger: 0,
  allRequestsBadger: 0,
  createdOnDataPeriodFilter: "",
  taskDropdown: null,
  statusAdvantageSearch: null,
  shwoHeaderSearch: false,
  isTableRefreash: false,
  myPendingApprovalData: {} as DashboardData,
  tasksWithRequestData: {} as DashboardData,
  allRequestsData: {} as DashboardData,
  advancedData: [],
  setFilter: (payload: any) => {
    set({ filter: payload });
  },
  setMyPendingApprovalBadger: (payload: any) => {
    set({ myPendingApprovalBadger: payload });
  },
  setAllRequestsBadger: (payload: any) => {
    set({ allRequestsBadger: payload });
  },
  setCreatedOnDataPeriodFilter: (payload: any) => {
    set({ createdOnDataPeriodFilter: payload });
  },
  setTaskDropdown: (payload: any) => {
    set({ taskDropdown: payload });
  },
  setStatusAdvantageSearch: (payload: any) => {
    set({ statusAdvantageSearch: payload });
  },
  setShwoHeaderSearch: (payload: any) => {
    set({ shwoHeaderSearch: payload });
  },
  setIsTableRefreash: (payload: any) => {
    set({ isTableRefreash: payload });
  },
  setMyPendingApprovalData: (payload: DashboardData) => {
    set({ myPendingApprovalData: payload });
  },
  setTasksWithRequestData: (payload: DashboardData) => {
    set({ tasksWithRequestData: payload });
  },
  setAllRequestsData: (payload: DashboardData) => {
    set({ allRequestsData: payload });
  },
}));
