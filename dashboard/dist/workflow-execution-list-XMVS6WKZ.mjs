import {
  getTransactionState,
  getTransactionStateColor
} from "./chunk-F2N5NI3W.mjs";
import {
  StatusCell
} from "./chunk-ADOCJB6L.mjs";
import "./chunk-LQTHYS2Z.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-VASL4POI.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-RKBIB2RM.mjs";
import "./chunk-WX2SMNCD.mjs";
import {
  useQueryParams
} from "./chunk-C76H5USB.mjs";
import "./chunk-IWTE57WW.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-QAF7PVQE.mjs";
import "./chunk-ODJSGZRJ.mjs";
import "./chunk-GQ6DSXIJ.mjs";
import "./chunk-XDUX5ONP.mjs";
import "./chunk-ZHSZGFLW.mjs";
import {
  useWorkflowExecutions
} from "./chunk-BKTH2GEJ.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/workflow-executions/workflow-execution-list/components/workflow-execution-list-table/workflow-execution-list-table.tsx
import { Container, Heading, Text } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { useTranslation as useTranslation2 } from "react-i18next";

// src/routes/workflow-executions/workflow-execution-list/components/workflow-execution-list-table/use-workflow-execution-table-columns.tsx
import { Badge } from "@medusajs/ui";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var columnHelper = createColumnHelper();
var useWorkflowExecutionTableColumns = () => {
  const { t } = useTranslation();
  return useMemo(
    () => [
      columnHelper.accessor("transaction_id", {
        header: t("workflowExecutions.transactionIdLabel"),
        cell: ({ getValue }) => /* @__PURE__ */ jsx(Badge, { size: "2xsmall", children: getValue() })
      }),
      columnHelper.accessor("state", {
        header: t("fields.state"),
        cell: ({ getValue }) => {
          const state = getValue();
          const color = getTransactionStateColor(state);
          const translatedState = getTransactionState(t, state);
          return /* @__PURE__ */ jsx(StatusCell, { color, children: /* @__PURE__ */ jsx("span", { className: "capitalize", children: translatedState }) });
        }
      }),
      columnHelper.accessor("execution", {
        header: t("workflowExecutions.progressLabel"),
        cell: ({ getValue }) => {
          const steps = getValue()?.steps;
          if (!steps) {
            return "0 of 0 steps";
          }
          const actionableSteps = Object.values(steps).filter(
            (step) => step.id !== ROOT_PREFIX
          );
          const completedSteps = actionableSteps.filter(
            (step) => step.invoke.state === "done" /* DONE */
          );
          return t("workflowExecutions.stepsCompletedLabel", {
            completed: completedSteps.length,
            count: actionableSteps.length
          });
        }
      })
    ],
    [t]
  );
};
var ROOT_PREFIX = "_root";

// src/routes/workflow-executions/workflow-execution-list/components/workflow-execution-list-table/use-workflow-execution-table-query.tsx
var useWorkflowExecutionTableQuery = ({
  pageSize = 20,
  prefix
}) => {
  const raw = useQueryParams(["q", "offset"], prefix);
  const { offset, ...rest } = raw;
  const searchParams = {
    limit: pageSize,
    offset: offset ? parseInt(offset) : 0,
    ...rest
  };
  return {
    searchParams,
    raw
  };
};

// src/routes/workflow-executions/workflow-execution-list/components/workflow-execution-list-table/workflow-execution-list-table.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var WorkflowExecutionListTable = () => {
  const { t } = useTranslation2();
  const { searchParams, raw } = useWorkflowExecutionTableQuery({
    pageSize: PAGE_SIZE
  });
  const { workflow_executions, count, isLoading, isError, error } = useWorkflowExecutions(
    {
      ...searchParams,
      fields: "execution,state"
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const columns = useWorkflowExecutionTableColumns();
  const { table } = useDataTable({
    data: workflow_executions || [],
    columns,
    count,
    pageSize: PAGE_SIZE,
    enablePagination: true,
    getRowId: (row) => row.id
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsx2("div", { className: "flex items-center justify-between px-6 py-4", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx2(Heading, { children: t("workflowExecutions.domain") }),
      /* @__PURE__ */ jsx2(Text, { className: "text-ui-fg-subtle", size: "small", children: t(`workflowExecutions.subtitle`) })
    ] }) }),
    /* @__PURE__ */ jsx2(
      DataTable,
      {
        table,
        columns,
        count,
        isLoading,
        pageSize: PAGE_SIZE,
        navigateTo: (row) => `${row.id}`,
        search: true,
        pagination: true,
        queryObject: raw,
        noRecords: {
          message: t("workflowExecutions.list.noRecordsMessage")
        }
      }
    )
  ] });
};

// src/routes/workflow-executions/workflow-execution-list/workflow-execution-list.tsx
import after from "virtual:medusa/widgets/workflow/list/after";
import before from "virtual:medusa/widgets/workflow/list/before";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var WorkflowExcecutionList = () => {
  return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-y-2", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(w.Component, {}) }, i);
    }),
    /* @__PURE__ */ jsx3(WorkflowExecutionListTable, {}),
    after.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(w.Component, {}) }, i);
    })
  ] });
};
export {
  WorkflowExcecutionList as Component
};
