import { View, Text } from "react-native";
import {
  ButtonGroup,
  Button,
  ButtonText,
} from "@travaildirect/components/ui/button";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex flex-1 px-4 items-center justify-center bg-background-0"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <View className="flex-1 justify-center">
        <Text className="text-2xl font-bold text-foreground-100">
          TravailDirect
        </Text>
      </View>
      <View className="w-[84%]">
        <ButtonGroup flexDirection="column" space="md">
          <Button
            size="lg"
            variant="solid"
            action="primary"
            onPress={() => router.push("/(onboarding)/create-account")}
          >
            <ButtonText>Créer un compte</ButtonText>
          </Button>

          <Button
            size="lg"
            variant="link"
            action="primary"
            onPress={() => router.push("/(onboarding)/login")}
          >
            <ButtonText>J'ai déjà un compte</ButtonText>
          </Button>
        </ButtonGroup>
      </View>
    </View>
  );
}
