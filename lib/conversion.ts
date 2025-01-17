import { addEventType, addEventTypeAndSubtype } from "./_addEventType";
import type AlgoliaAnalytics from "./insights";
import type { InsightsEvent } from "./types";
import type { WithAdditionalParams } from "./utils";
import { extractAdditionalParams } from "./utils";

export interface InsightsSearchConversionEvent {
  eventName: string;
  userToken?: string;
  authenticatedUserToken?: string;
  timestamp?: number;
  index: string;

  queryID: string;
  objectIDs: string[];
  objectData?: InsightsEvent["objectData"];
  currency?: InsightsEvent["currency"];
}

export function convertedObjectIDsAfterSearch(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsSearchConversionEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsSearchConversionEvent>(params);

  return this.sendEvents(addEventType("conversion", events), additionalParams);
}

export function addedToCartObjectIDsAfterSearch(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsSearchConversionEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsSearchConversionEvent>(params);

  return this.sendEvents(
    addEventTypeAndSubtype("conversion", "addToCart", events),
    additionalParams
  );
}

export function purchasedObjectIDsAfterSearch(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsSearchConversionEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsSearchConversionEvent>(params);

  return this.sendEvents(
    addEventTypeAndSubtype("conversion", "purchase", events),
    additionalParams
  );
}

export interface InsightsSearchConversionObjectIDsEvent {
  eventName: string;
  userToken?: string;
  authenticatedUserToken?: string;
  timestamp?: number;
  index: string;

  objectIDs: string[];
  objectData?: InsightsEvent["objectData"];
  currency?: InsightsEvent["currency"];
}

export function convertedObjectIDs(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsSearchConversionObjectIDsEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsSearchConversionObjectIDsEvent>(params);

  return this.sendEvents(addEventType("conversion", events), additionalParams);
}

export function addedToCartObjectIDs(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsSearchConversionObjectIDsEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsSearchConversionObjectIDsEvent>(params);

  return this.sendEvents(
    addEventTypeAndSubtype("conversion", "addToCart", events),
    additionalParams
  );
}

export function purchasedObjectIDs(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsSearchConversionObjectIDsEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsSearchConversionObjectIDsEvent>(params);

  return this.sendEvents(
    addEventTypeAndSubtype("conversion", "purchase", events),
    additionalParams
  );
}

export interface InsightsSearchConversionFiltersEvent {
  eventName: string;
  userToken?: string;
  authenticatedUserToken?: string;
  timestamp?: number;
  index: string;

  filters: string[];
}

export function convertedFilters(
  this: AlgoliaAnalytics,
  ...params: Array<WithAdditionalParams<InsightsSearchConversionFiltersEvent>>
): ReturnType<AlgoliaAnalytics["sendEvents"]> {
  const { events, additionalParams } =
    extractAdditionalParams<InsightsSearchConversionFiltersEvent>(params);

  return this.sendEvents(addEventType("conversion", events), additionalParams);
}
