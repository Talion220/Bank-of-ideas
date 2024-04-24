import { Container, Title, Timeline, Text, Table } from "@mantine/core";

function LifeCycle() {
  return (
    <Container mt={40} size="xl">
      <Title mb={30}>Жизненный путь идеи: </Title>

      <Timeline active={1} bulletSize={24} lineWidth={2}>
        <Timeline.Item title="New branch">
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Element position</Table.Th>
                <Table.Th>Element name</Table.Th>
                <Table.Th>Symbol</Table.Th>
                <Table.Th>Atomic mass</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>1</Table.Td>
                <Table.Td>2</Table.Td>
                <Table.Td>3</Table.Td>
                <Table.Td>4</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>1</Table.Td>
                <Table.Td>2</Table.Td>
                <Table.Td>3</Table.Td>
                <Table.Td>4</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Element position</Table.Th>
                <Table.Th>Element name</Table.Th>
                <Table.Th>Symbol</Table.Th>
                <Table.Th>Atomic mass</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>1</Table.Td>
                <Table.Td>2</Table.Td>
                <Table.Td>3</Table.Td>
                <Table.Td>4</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>1</Table.Td>
                <Table.Td>2</Table.Td>
                <Table.Td>3</Table.Td>
                <Table.Td>4</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Element position</Table.Th>
                <Table.Th>Element name</Table.Th>
                <Table.Th>Symbol</Table.Th>
                <Table.Th>Atomic mass</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>1</Table.Td>
                <Table.Td>2</Table.Td>
                <Table.Td>3</Table.Td>
                <Table.Td>4</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>1</Table.Td>
                <Table.Td>2</Table.Td>
                <Table.Td>3</Table.Td>
                <Table.Td>4</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Timeline.Item>

        <Timeline.Item title="Commits">
          <Text c="dimmed" size="sm">
            You&apos;ve pushed 23 commits to
            <Text variant="link" component="span" inherit>
              fix-notifications branch
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            52 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Pull request" lineVariant="dashed">
          <Text c="dimmed" size="sm">
            You&apos;ve submitted a pull request
            <Text variant="link" component="span" inherit>
              Fix incorrect notification message (#187)
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            34 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Code review">
          <Text c="dimmed" size="sm">
            <Text variant="link" component="span" inherit>
              Robert Gluesticker
            </Text>
            left a code review on your pull request
          </Text>
          <Text size="xs" mt={4}>
            12 minutes ago
          </Text>
        </Timeline.Item>
      </Timeline>
    </Container>
  );
}

export default LifeCycle;
