import { Group, Paper, SimpleGrid, Text, Grid } from "@mantine/core";
import { IconFile } from "@tabler/icons-react";
import { DashboardResource } from "@/Modules/Dashboard/Types/DashboardResource";
import classes from "./StatCards.module.css";
import { router } from "@inertiajs/react";

interface StatCardsProps {
  dashboard: DashboardResource;
}

const icons = {
  review_pending: IconFile,
  review_accepted: IconFile,
  review_rejected: IconFile,
  approval_pending: IconFile,
  approval_accepted: IconFile,
  approval_rejected: IconFile,
  total_documents: IconFile,
};

export function StatCards({ dashboard }: StatCardsProps) {
  const data = [
    {
      title: "Review Pending",
      icon: "review_pending",
      value: dashboard.number_of_review_pending,
      color: "blue",
      statusParam: "reviewal_pending",
    },
    {
      title: "Review Accepted",
      icon: "review_accepted",
      value: dashboard.number_of_review_accepted,
      color: "green",
      statusParam: "reviewal_accepted",
    },
    {
      title: "Review Rejected",
      icon: "review_rejected",
      value: dashboard.number_of_review_rejected,
      color: "red",
      statusParam: "reviewal_rejected",
    },
    {
      title: "Approval Pending",
      icon: "approval_pending",
      value: dashboard.number_of_approval_pending,
      color: "blue",
      statusParam: "approval_pending",
    },
    {
      title: "Approval Accepted",
      icon: "approval_accepted",
      value: dashboard.number_of_approval_accepted,
      color: "green",
      statusParam: "approval_accepted",
    },
    {
      title: "Approval Rejected",
      icon: "approval_rejected",
      value: dashboard.number_of_approval_rejected,
      color: "red",
      statusParam: "approval_rejected",
    },
    {
      title: "Total Documents",
      icon: "total_documents",
      value: dashboard.number_of_documents,
      color: "purple",
      statusParam: null,
    },
  ] as const;

  const totalDocuments = data.find((stat) => stat.title === "Total Documents");
  const otherStats = data.filter((stat) => stat.title !== "Total Documents");

  const renderCard = (stat: typeof data[number], doubleHeight: boolean = false) => {
    const Icon = icons[stat.icon];

    const handleClick = () => {
      if (stat.statusParam) {
        router.visit(`/dashboard/reports?document_status=${stat.statusParam}`);
      }
    };

    return (
      <Paper
        withBorder
        p="md"
        radius="md"
        key={stat.title}
        onClick={handleClick}
        style={{ cursor: stat.statusParam ? "pointer" : "default" }}
        className={`${classes.card} ${doubleHeight ? classes.doubleHeight : ""}`}
      >
        <Group justify="space-between">
          <Text size="sm" color="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <Icon
            className={classes.icon}
            size="1.4rem"
            stroke={1.5}
            color={stat.color}
            height={32}
            width={32}
          />
        </Group>

        <Group align="flex-end" gap="xs" mt={25}>
          <Text className={classes.value}>{stat.value}</Text>
        </Group>
      </Paper>
    );
  };

  return (
    <div className={classes.root}>
      <Grid gutter="md" align="stretch">
        <Grid.Col span={3} className={classes.doubleRow}>
          {totalDocuments && renderCard(totalDocuments, true)}
        </Grid.Col>
        <Grid.Col span={9}>
          <SimpleGrid cols={3} spacing="md">
            {otherStats.map((stat) => renderCard(stat))}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}