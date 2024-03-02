import { Box, Flex, Text, Button, Container, Heading, SimpleGrid, Icon, Image, VStack, HStack, Spacer } from "@chakra-ui/react";
import { FaCar, FaMoneyBillWave, FaRegHandshake, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" p={4} borderBottom="1px" borderColor="gray.200" alignItems="center">
        <Heading size="md">StartUpRide</Heading>
        <Spacer />
        <Button colorScheme="blue" leftIcon={<FaPlus />}>
          Start a Ride
        </Button>
      </Flex>

      {/* Hero */}
      <Container maxW="container.xl" centerContent py={10}>
        <VStack spacing={4}>
          <Heading as="h1" size="2xl" textAlign="center">
            The easiest way to start your business journey
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Connect with professionals and get your business rolling in no time!
          </Text>
          <Button colorScheme="green" size="lg" leftIcon={<FaCar />}>
            Start Now
          </Button>
          <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxhdW5jaHxlbnwwfHx8fDE3MDk0MTMwNzR8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="400px" objectFit="cover" />
        </VStack>
      </Container>

      {/* Services */}
      <Box py={20} bg="gray.50">
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Our Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} px={5}>
          <ServiceCard icon={FaMoneyBillWave} title="Funding" description="Find investors and financial advice to kickstart your business." />
          <ServiceCard icon={FaRegHandshake} title="Networking" description="Connect with like-minded entrepreneurs and grow your network." />
          <ServiceCard icon={FaCar} title="Logistics" description="Manage the logistics of your products with our transport solutions." />
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Flex as="footer" p={4} borderTop="1px" borderColor="gray.200" justifyContent="center">
        <Text>© 2023 StartUpRide. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

// Service card component
const ServiceCard = ({ icon, title, description }) => (
  <VStack bg="white" p={5} borderRadius="md" boxShadow="md" alignItems="start">
    <Icon as={icon} w={10} h={10} color="blue.500" />
    <Text fontWeight="bold" fontSize="lg">
      {title}
    </Text>
    <Text>{description}</Text>
  </VStack>
);

export default Index;
