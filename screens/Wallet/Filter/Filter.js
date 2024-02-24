import React from 'react';
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

function Filter(props) {
  return (
    <View className="flex flex-col py-11 bg-white rounded-2xl max-w-[271px]">
      <View className="flex gap-5 justify-between self-end mr-5 max-w-full text-base text-center whitespace-nowrap text-neutral-950 w-[132px]">
        <View>
          <Text>Filter</Text>
        </View>
        <View
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc5a583676a82bbb2933378e04fb5457a762d16511c05a29207ef2eb300a2b89?"
          className="flex-1 shrink-0 w-full aspect-square"
        />
      </View>
      <View className="flex flex-col px-5 mt-9 w-full text-sm text-sky-800">
        <View className="text-base text-center text-neutral-950">
          <Text>Filter by date:</Text>
        </View>
        <View className="flex gap-2 justify-between px-3 py-1 mt-3 text-center">
          <View
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/49525dabc9768ecf2d1a62abbb8f8f86578c24ce6c6806deb87af09648fdd47f?"
            className="w-6 aspect-square"
          />
          <View className="flex-auto my-auto">
            <Text>Current transition</Text>
          </View>
        </View>
        <View className="flex gap-2 justify-between px-4 py-1 mt-1 text-center">
          <View
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/83b3847dba434e872913195abbceece5c7d708b20a961e08f6aa226f6cfcb300?"
            className="w-6 aspect-square"
          />
          <View className="flex-auto my-auto">
            <Text>By weekly</Text>
          </View>
        </View>
        <View className="flex gap-2 justify-between px-4 py-1 mt-1 text-center">
          <View
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/49525dabc9768ecf2d1a62abbb8f8f86578c24ce6c6806deb87af09648fdd47f?"
            className="w-6 aspect-square"
          />
          <View className="flex-auto my-auto">
            <Text>By monthly</Text>
          </View>
        </View>
        <View className="flex gap-2 justify-between px-5 py-1 mt-1 text-center">
          <View
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/49525dabc9768ecf2d1a62abbb8f8f86578c24ce6c6806deb87af09648fdd47f?"
            className="w-6 aspect-square"
          />
          <View className="flex-auto my-auto">
            <Text>By year</Text>
          </View>
        </View>
        <View className="mt-6 text-base text-center text-neutral-950">
          <Text>Filter by keyword:</Text>
        </View>
        <View className="mt-3 text-base font-medium text-zinc-500">
          <Text>Use words for the transaction discretion.</Text>
        </View>
        <View className="justify-center px-4 py-3 mt-1 whitespace-nowrap rounded-lg border border-solid bg-zinc-50 border-[color:var(--Neutral,#CBCBCB)] text-zinc-500">
          <Text>Costco</Text>
        </View>
        <View className="justify-center items-center px-16 py-3 mt-16 text-center text-white whitespace-nowrap bg-sky-800 rounded-lg">
          <Text>Apply</Text>
        </View>
        <View className="self-center mt-6 text-center text-zinc-400">
          <Text>Clear </Text>
        </View>
      </View>
    </View>
  );
}

export default Filter;



