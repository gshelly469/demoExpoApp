import React, { useState, useEffect, useRef } from "react";
import { View, ScrollView, Text, StyleSheet, Animated } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { fetchProfileData } from "../services/profileService";
import ProfileHeader from "../components/ProfileHeader";
import ProfileCard from "../components/ProfileCard";
import TabNavigation from "../components/TabNavigation";
import GridView from "../components/GridView";
import BottomNavigation from "../components/BottomNavigation";
import StickyHeader from "../components/StickyHeader";
import { COLORS, LAYOUT } from "../constants/theme";

const ProfileScreen = () => {
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [activeTab, setActiveTab] = useState("posts");
  const [activeNavItem, setActiveNavItem] = useState("profile");
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;
  const SCROLL_THRESHOLD = 500;

  useEffect(() => {
    loadProfileData();
  }, []);

  useEffect(() => {
    const listenerId = scrollY.addListener(({ value }) => {
      setShowStickyHeader(value > SCROLL_THRESHOLD);
    });

    return () => {
      scrollY.removeListener(listenerId);
    };
  }, []);

  const loadProfileData = async () => {
    try {
      setLoading(true);
      const data = await fetchProfileData();
      setProfileData(data);
    } catch (error) {
      console.error("Error loading profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const getActiveContent = () => {
    if (!profileData) return [];

    switch (activeTab) {
      case "posts":
        return profileData.posts;
      case "clips":
        return profileData.clips;
      case "tagged":
        return profileData.tagged;
      default:
        return profileData.posts;
    }
  };

  if (loading) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={["bottom"]}>
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  if (!profileData) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={["bottom"]}>
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Error loading profile</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  const { user } = profileData;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["bottom"]}>
        <StickyHeader
          username={user.name}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isVisible={showStickyHeader}
        />

        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          <ProfileHeader coverImage={user.coverImage} />
          <ProfileCard user={user} />
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          <GridView items={getActiveContent()} />
          <View style={styles.bottomSpacing} />
        </Animated.ScrollView>

        <BottomNavigation
          activeItem={activeNavItem}
          onItemPress={setActiveNavItem}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.cardBackground,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  loadingText: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
  bottomSpacing: {
    height: 20,
  },
});

export default ProfileScreen;
