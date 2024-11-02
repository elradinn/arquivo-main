import { Group, Paper, SimpleGrid, Text, Grid } from "@mantine/core";
import { IconFile, IconCheck, IconX, IconClock, IconMessage, IconMessageCheck, IconMessageX, IconFileX, IconFileCheck, IconFileDescription } from "@tabler/icons-react";
import { DashboardResource } from "@/Modules/Dashboard/Types/DashboardResource";
import classes from "./StatCards.module.css";
import { router } from "@inertiajs/react";

interface StatCardsProps {
  dashboard: DashboardResource;
}

const icons = {
  review_pending: IconMessage,
  review_accepted: IconMessageCheck,
  review_rejected: IconMessageX,
  approval_pending: IconFile,
  approval_accepted: IconFileCheck,
  approval_rejected: IconFileX,
  total_documents: IconFileDescription,
};

export function StatCards({ dashboard }: StatCardsProps) {
  const data = [
    {
      title: "Review Accepted",
      icon: "review_accepted",
      value: dashboard.number_of_review_accepted,
      color: "green",
      statusParam: "reviewal_accepted",
    },
    {
      title: "Review Pending",
      icon: "review_pending",
      value: dashboard.number_of_review_pending,
      color: "yellow",
      statusParam: "reviewal_pending",
    },
    {
      title: "Review Rejected",
      icon: "review_rejected",
      value: dashboard.number_of_review_rejected,
      color: "red",
      statusParam: "reviewal_rejected",
    },
    {
      title: "Approval Accepted",
      icon: "approval_accepted",
      value: dashboard.number_of_approval_accepted,
      color: "green",
      statusParam: "approval_accepted",
    },
    {
      title: "Approval Pending",
      icon: "approval_pending",
      value: dashboard.number_of_approval_pending,
      color: "yellow",
      statusParam: "approval_pending",
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
      color: "violet",
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
        p="lg"
        radius="md"
        key={stat.title}
        onClick={handleClick}
        shadow="xs"
        style={{
          cursor: stat.statusParam ? "pointer" : "default",
        }}
        className={`${classes.card} ${doubleHeight ? classes.doubleHeight : ""}`}
      >
        <Group justify="left" mb="sm">
          <div
            style={{
              backgroundColor: `var(--mantine-color-${stat.color}-light)`,
              borderRadius: "50%",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              className={classes.icon}
              size="1.4rem"
              color={`var(--mantine-color-${stat.color}-light-color)`}
              height={32}
              width={32}
            />
          </div>
        </Group>

        <Text size="sm" c="dimmed" className={classes.title}>
          {stat.title}
        </Text>

        <Group align="center" mt={10}>
          <Text className={classes.value} size="lg">
            {stat.value}
          </Text>
        </Group>
      </Paper>
    );
  };

  return (
    <div className={classes.root}>
      <Grid>
        <Grid.Col
          span={{ base: 12, lg: 3 }}
        >
          {totalDocuments && renderCard(totalDocuments, true)}
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, lg: 9 }}
        >
          <SimpleGrid
            cols={{ base: 1, lg: 3 }}
          >
            {otherStats.map((stat) => renderCard(stat))}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div >
  );
}