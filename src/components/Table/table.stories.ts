// table/table.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./src/table"; 
import { columns } from "./src/components/organisms/ColumnsTable";
import { fn } from "@storybook/test"; 
import { Documentation } from "./table.document";


const meta: Meta<typeof Table> = {
  title: "Development/Table",
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: Documentation,
      layout: 'centered', 
    },
  },
  argTypes: {
    handleRowPress: { action: 'rowClicked' }, 
    api: { control: 'text' }, 
  },
  args: {
    handleRowPress: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;


/**
 * Exibe a tabela com dados padrão.
 * O que observar: Todas as colunas devem ser exibidas com dados fornecidos.
 */
export const StandardWithData: Story = {
  args: {
    handleRowPress: fn(),
    columnSettings: columns,
    baseUrl: 'https://api.dev.k8s.safra.int/',
    api: 'case-management/v1/searchcasebyuser',
    userOwner: 'FlavioH',
    typeRequest: 1,
    application: 6,
  },
};

/**
 * Exibe a tabela com dados padrão.
 * O que observar: Não foi passado a coluna, a configuração padrão de coluna deve ser respeitada.
 */
export const StandardNoColumnSettings: Story = {
  args: {
    handleRowPress: fn(),
    baseUrl: 'https://api.dev.k8s.safra.int/',
    api: 'case-management/v1/searchcasebyuser',
    userOwner: 'FlavioH',
    typeRequest: 1,
    application: 6,
  },
};


/**
 * Exibe a tabela vazia.
 * O que observar: A tabela deve mostrar uma mensagem indicando que não há dados disponíveis.
 */
export const EmptyTable: Story = {
  args: {
    dataSource: [],
  },
};



/**
 * Exibe colunas com strings multilinha.
 * O que observar: O campo "Pending Travel" deve exibir texto multilinha corretamente formatado.
 */
export const MultilineStrings: Story = {
  args: {
    columnSettings: columns,
    dataSource: [
      {
        id: "2",
        createdOn: "2024-07-02T10:00:00Z",
        status: 2,
        currentActivity: "Approval",
        caseAttribute: [
          { name: "CASE_NUMBER", value: "67890" },
          { name: "Pending Travel", value: "Nova Viagem\nSão Paulo\nRio de Janeiro" },
          { name: "PERIOD_FROM", value: "2024-02-01" },
          { name: "PERIOD_TO", value: "2024-02-28" },
          { name: "ITINERARY_FROM", value: "São Paulo" },
          { name: "ITINERARY_TO", value: "Rio de Janeiro" },
          { name: "RESULT", value: "pending" },
          { name: "Initiator", value: "Carlos Silva" }
        ]
      }
    ]
  },
};


/**
 * Exibe como a tabela lida com dados ausentes.
 * O que observar: As células devem exibir o valor padrão "-" para dados ausentes.
 */
export const MissingData: Story = {
  args: {
    columnSettings: columns,
    dataSource: [
      {
        id: "3",
        createdOn: "2024-07-03T15:00:00Z",
        status: 3,
        currentActivity: "Finalization",
        caseAttribute: [
          { name: "CASE_NUMBER", value: "" }, // Dados ausentes
          { name: "Pending Travel", value: "" }, // Dados ausentes
          { name: "PERIOD_FROM", value: "" }, // Dados ausentes
          { name: "PERIOD_TO", value: "" }, // Dados ausentes
          { name: "ITINERARY_FROM", value: "" }, // Dados ausentes
          { name: "ITINERARY_TO", value: "" }, // Dados ausentes
          { name: "RESULT", value: "" }, // Dados ausentes
          { name: "Initiator", value: "" } // Dados ausentes
        ]
      }
    ]
  },
};


/**
 * Exibe formatos diferentes de data e hora.
 * O que observar: As colunas "Period From" e "Period To" devem exibir apenas datas.
 */
export const FormattedDates: Story = {
  args: {
    columnSettings: columns,
    dataSource:  [
      {
        id: "3",
        createdOn: "2024-07-03T15:00:00Z",
        status: 3,
        currentActivity: "Finalization",
        caseAttribute: [
          { name: "CASE_NUMBER", value: "" }, // Dados ausentes
          { name: "Pending Travel", value: "" }, // Dados ausentes
          { name: "PERIOD_FROM", value: "2024-04-01" },
          { name: "PERIOD_TO", value: "2024-04-30" },
          { name: "ITINERARY_FROM", value: "" }, // Dados ausentes
          { name: "ITINERARY_TO", value: "" }, // Dados ausentes
          { name: "RESULT", value: "" }, // Dados ausentes
          { name: "Initiator", value: "" } // Dados ausentes
        ]
      }
    ]
  },
};

/**
 * Exibe diferentes estados de status e resultado.
 * O que observar: A coluna "Request Status" e "Result" deve exibir diferentes ícones ou estilos para cada status.
 */
export const DifferentStatusStates: Story = {
  args: {
    columnSettings: columns,
    dataSource: [
      {
        id: "4",
        createdOn: "2024-07-04T11:30:00Z",
        status: 1, // Aprovado
        currentActivity: "Analysis",
        caseAttribute: [
          { name: "CASE_NUMBER", value: "54321" },
          { name: "Pending Travel", value: "Jane Doe" },
          { name: "PERIOD_FROM", value: "2024-03-01" },
          { name: "PERIOD_TO", value: "2024-03-31" },
          { name: "ITINERARY_FROM", value: "Chicago" },
          { name: "ITINERARY_TO", value: "Miami" },
          { name: "RESULT", value: "approved" },
          { name: "Initiator", value: "Alice Johnson" }
        ]
      },
      {
        id: "5",
        createdOn: "2024-07-05T13:00:00Z",
        status: 2, // Pendente
        currentActivity: "Validation",
        caseAttribute: [
          { name: "CASE_NUMBER", value: "98765" },
          { name: "Pending Travel", value: "Mark Smith" },
          { name: "PERIOD_FROM", value: "2024-04-01" },
          { name: "PERIOD_TO", value: "2024-04-30" },
          { name: "ITINERARY_FROM", value: "Houston" },
          { name: "ITINERARY_TO", value: "Dallas" },
          { name: "RESULT", value: "pending" },
          { name: "Initiator", value: "Bob Brown" }
        ]
      }
    ]
  },
};


/**
 * Exibe o comportamento de elipse de texto.
 * O que observar: Células com texto muito longo devem ser truncadas com reticências.
 */
export const TextEllipsis: Story = {
  args: {
    columnSettings: columns,
    dataSource: [
      {
        id: "7",
        createdOn: "2024-07-07T08:20:00Z",
        status: 1,
        currentActivity: "Analysis",
        caseAttribute: [
          { name: "CASE_NUMBER", value: "123456789012345678901234567890" }, // Texto longo
          { name: "Pending Travel", value: "Long Name That Exceeds The Usual Length" }, // Texto longo
          { name: "PERIOD_FROM", value: "2024-06-01" },
          { name: "PERIOD_TO", value: "2024-06-30" },
          { name: "ITINERARY_FROM", value: "Very Long City Name That Won't Fit" }, // Texto longo
          { name: "ITINERARY_TO", value: "Another Extremely Long City Name" }, // Texto longo
          { name: "RESULT", value: "approved" },
          { name: "Initiator", value: "Daisy Lee" }
        ]
      }
    ]
  },
};


