// package: mythos.ongeki.v0
// file: ongeki/user.proto

import * as jspb from "google-protobuf";
import * as ongeki_playlog_pb from "../ongeki/playlog_pb";

export class GetPlaylogRequest extends jspb.Message {
  getProfileApiId(): string;
  setProfileApiId(value: string): void;

  hasLastUserPlayDate(): boolean;
  clearLastUserPlayDate(): void;
  getLastUserPlayDate(): string;
  setLastUserPlayDate(value: string): void;

  hasLimit(): boolean;
  clearLimit(): void;
  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlaylogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlaylogRequest): GetPlaylogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPlaylogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlaylogRequest;
  static deserializeBinaryFromReader(message: GetPlaylogRequest, reader: jspb.BinaryReader): GetPlaylogRequest;
}

export namespace GetPlaylogRequest {
  export type AsObject = {
    profileApiId: string,
    lastUserPlayDate: string,
    limit: number,
  }
}

export class GetPlaylogStreamItem extends jspb.Message {
  getPlaylogApiId(): string;
  setPlaylogApiId(value: string): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): ongeki_playlog_pb.PlaylogInfo | undefined;
  setInfo(value?: ongeki_playlog_pb.PlaylogInfo): void;

  hasJudge(): boolean;
  clearJudge(): void;
  getJudge(): ongeki_playlog_pb.PlaylogJudge | undefined;
  setJudge(value?: ongeki_playlog_pb.PlaylogJudge): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlaylogStreamItem.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlaylogStreamItem): GetPlaylogStreamItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPlaylogStreamItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlaylogStreamItem;
  static deserializeBinaryFromReader(message: GetPlaylogStreamItem, reader: jspb.BinaryReader): GetPlaylogStreamItem;
}

export namespace GetPlaylogStreamItem {
  export type AsObject = {
    playlogApiId: string,
    info?: ongeki_playlog_pb.PlaylogInfo.AsObject,
    judge?: ongeki_playlog_pb.PlaylogJudge.AsObject,
  }
}

