import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { ResponsiveCalendar } from "@nivo/calendar";

import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";

function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

const edits = [
  {
    value: 380,
    day: "2016-12-27"
  },
  {
    value: 197,
    day: "2017-02-18"
  },
  {
    value: 369,
    day: "2016-07-06"
  },
  {
    value: 9,
    day: "2018-03-19"
  },
  {
    value: 123,
    day: "2016-09-19"
  },
  {
    value: 329,
    day: "2017-02-09"
  },
  {
    value: 110,
    day: "2016-08-31"
  },
  {
    value: 312,
    day: "2017-10-11"
  },
  {
    value: 361,
    day: "2016-10-21"
  },
  {
    value: 27,
    day: "2015-06-02"
  },
  {
    value: 151,
    day: "2017-11-03"
  },
  {
    value: 187,
    day: "2017-02-27"
  },
  {
    value: 203,
    day: "2018-04-11"
  },
  {
    value: 11,
    day: "2018-07-21"
  },
  {
    value: 151,
    day: "2017-12-07"
  },
  {
    value: 124,
    day: "2017-08-14"
  },
  {
    value: 58,
    day: "2015-09-18"
  },
  {
    value: 242,
    day: "2015-04-05"
  },
  {
    value: 126,
    day: "2016-01-11"
  },
  {
    value: 92,
    day: "2017-05-23"
  },
  {
    value: 7,
    day: "2015-08-14"
  },
  {
    value: 12,
    day: "2017-05-14"
  },
  {
    value: 398,
    day: "2015-12-13"
  },
  {
    value: 114,
    day: "2017-03-20"
  },
  {
    value: 35,
    day: "2017-06-30"
  },
  {
    value: 281,
    day: "2015-08-11"
  },
  {
    value: 284,
    day: "2016-02-05"
  },
  {
    value: 374,
    day: "2015-05-11"
  },
  {
    value: 271,
    day: "2015-06-15"
  },
  {
    value: 268,
    day: "2017-04-23"
  },
  {
    value: 96,
    day: "2015-08-21"
  },
  {
    value: 14,
    day: "2015-07-08"
  },
  {
    value: 128,
    day: "2017-01-22"
  },
  {
    value: 58,
    day: "2016-05-10"
  },
  {
    value: 217,
    day: "2017-11-04"
  },
  {
    value: 130,
    day: "2015-10-15"
  },
  {
    value: 68,
    day: "2017-07-19"
  },
  {
    value: 400,
    day: "2017-05-30"
  },
  {
    value: 321,
    day: "2016-03-08"
  },
  {
    value: 14,
    day: "2017-12-24"
  },
  {
    value: 375,
    day: "2016-12-29"
  },
  {
    value: 40,
    day: "2017-07-10"
  },
  {
    value: 300,
    day: "2017-03-13"
  },
  {
    value: 391,
    day: "2017-09-03"
  },
  {
    value: 324,
    day: "2015-08-02"
  },
  {
    value: 136,
    day: "2018-04-14"
  },
  {
    value: 31,
    day: "2017-03-06"
  },
  {
    value: 235,
    day: "2017-08-28"
  },
  {
    value: 224,
    day: "2017-08-01"
  },
  {
    value: 35,
    day: "2017-10-20"
  },
  {
    value: 46,
    day: "2017-11-07"
  },
  {
    value: 231,
    day: "2018-04-07"
  },
  {
    value: 125,
    day: "2015-10-19"
  },
  {
    value: 81,
    day: "2017-07-11"
  },
  {
    value: 122,
    day: "2015-11-28"
  },
  {
    value: 128,
    day: "2016-07-30"
  },
  {
    value: 327,
    day: "2017-12-12"
  },
  {
    value: 372,
    day: "2016-08-15"
  },
  {
    value: 352,
    day: "2017-10-27"
  },
  {
    value: 356,
    day: "2015-07-14"
  },
  {
    value: 259,
    day: "2017-09-22"
  },
  {
    value: 84,
    day: "2018-05-28"
  },
  {
    value: 335,
    day: "2017-10-23"
  },
  {
    value: 276,
    day: "2017-03-17"
  },
  {
    value: 314,
    day: "2017-09-16"
  },
  {
    value: 111,
    day: "2015-11-12"
  },
  {
    value: 89,
    day: "2016-11-13"
  },
  {
    value: 67,
    day: "2017-09-17"
  },
  {
    value: 166,
    day: "2016-05-03"
  },
  {
    value: 53,
    day: "2018-08-03"
  },
  {
    value: 293,
    day: "2018-05-21"
  },
  {
    value: 202,
    day: "2017-02-25"
  },
  {
    value: 113,
    day: "2015-12-18"
  },
  {
    value: 206,
    day: "2018-01-31"
  },
  {
    value: 97,
    day: "2016-04-07"
  },
  {
    value: 180,
    day: "2015-12-22"
  },
  {
    value: 195,
    day: "2016-06-30"
  },
  {
    value: 341,
    day: "2016-05-02"
  },
  {
    value: 282,
    day: "2017-01-08"
  },
  {
    value: 212,
    day: "2016-10-28"
  },
  {
    value: 23,
    day: "2017-01-09"
  },
  {
    value: 81,
    day: "2017-09-23"
  },
  {
    value: 92,
    day: "2016-10-15"
  },
  {
    value: 388,
    day: "2016-05-09"
  },
  {
    value: 176,
    day: "2016-02-26"
  },
  {
    value: 270,
    day: "2017-05-19"
  },
  {
    value: 185,
    day: "2016-08-28"
  },
  {
    value: 253,
    day: "2017-10-24"
  },
  {
    value: 219,
    day: "2018-06-02"
  },
  {
    value: 243,
    day: "2016-06-22"
  },
  {
    value: 320,
    day: "2015-11-02"
  },
  {
    value: 387,
    day: "2016-04-19"
  },
  {
    value: 140,
    day: "2015-12-19"
  },
  {
    value: 175,
    day: "2018-03-22"
  },
  {
    value: 395,
    day: "2017-12-03"
  },
  {
    value: 49,
    day: "2015-12-06"
  },
  {
    value: 163,
    day: "2015-07-12"
  },
  {
    value: 212,
    day: "2017-07-09"
  },
  {
    value: 381,
    day: "2015-09-21"
  },
  {
    value: 383,
    day: "2016-11-20"
  },
  {
    value: 262,
    day: "2015-10-12"
  },
  {
    value: 114,
    day: "2017-06-25"
  },
  {
    value: 90,
    day: "2016-01-30"
  },
  {
    value: 195,
    day: "2016-11-05"
  },
  {
    value: 398,
    day: "2017-06-05"
  },
  {
    value: 395,
    day: "2017-05-16"
  },
  {
    value: 199,
    day: "2018-02-09"
  },
  {
    value: 47,
    day: "2016-04-28"
  },
  {
    value: 338,
    day: "2015-05-29"
  },
  {
    value: 209,
    day: "2016-03-29"
  },
  {
    value: 159,
    day: "2017-06-06"
  },
  {
    value: 386,
    day: "2015-07-07"
  },
  {
    value: 132,
    day: "2016-05-12"
  },
  {
    value: 365,
    day: "2015-10-11"
  },
  {
    value: 128,
    day: "2015-06-23"
  },
  {
    value: 62,
    day: "2018-06-06"
  },
  {
    value: 246,
    day: "2016-12-19"
  },
  {
    value: 272,
    day: "2018-06-23"
  },
  {
    value: 110,
    day: "2018-02-27"
  },
  {
    value: 293,
    day: "2015-11-15"
  },
  {
    value: 376,
    day: "2018-04-09"
  },
  {
    value: 317,
    day: "2016-08-29"
  },
  {
    value: 366,
    day: "2017-01-15"
  },
  {
    value: 225,
    day: "2018-06-07"
  },
  {
    value: 344,
    day: "2016-12-21"
  },
  {
    value: 206,
    day: "2015-09-28"
  },
  {
    value: 221,
    day: "2016-10-12"
  },
  {
    value: 159,
    day: "2016-09-10"
  },
  {
    value: 274,
    day: "2016-02-12"
  },
  {
    value: 145,
    day: "2016-06-20"
  },
  {
    value: 51,
    day: "2017-09-01"
  },
  {
    value: 91,
    day: "2015-10-13"
  },
  {
    value: 140,
    day: "2017-04-29"
  },
  {
    value: 25,
    day: "2016-02-24"
  },
  {
    value: 331,
    day: "2018-01-10"
  },
  {
    value: 90,
    day: "2016-06-03"
  },
  {
    value: 17,
    day: "2015-07-17"
  },
  {
    value: 153,
    day: "2018-02-26"
  },
  {
    value: 22,
    day: "2016-01-18"
  },
  {
    value: 91,
    day: "2016-06-04"
  },
  {
    value: 264,
    day: "2017-10-29"
  },
  {
    value: 144,
    day: "2015-06-13"
  },
  {
    value: 116,
    day: "2017-05-09"
  },
  {
    value: 322,
    day: "2017-04-26"
  },
  {
    value: 12,
    day: "2016-10-16"
  },
  {
    value: 35,
    day: "2016-12-08"
  },
  {
    value: 139,
    day: "2017-09-11"
  },
  {
    value: 149,
    day: "2015-08-17"
  },
  {
    value: 230,
    day: "2016-03-27"
  },
  {
    value: 151,
    day: "2015-08-29"
  },
  {
    value: 65,
    day: "2016-09-17"
  },
  {
    value: 63,
    day: "2016-03-01"
  },
  {
    value: 236,
    day: "2015-12-01"
  },
  {
    value: 228,
    day: "2016-05-05"
  },
  {
    value: 274,
    day: "2016-02-17"
  },
  {
    value: 212,
    day: "2015-05-19"
  },
  {
    value: 381,
    day: "2016-05-17"
  },
  {
    value: 3,
    day: "2016-01-25"
  },
  {
    value: 212,
    day: "2017-06-21"
  },
  {
    value: 279,
    day: "2016-10-01"
  },
  {
    value: 235,
    day: "2017-08-07"
  },
  {
    value: 360,
    day: "2018-01-17"
  },
  {
    value: 181,
    day: "2018-01-09"
  },
  {
    value: 268,
    day: "2016-10-25"
  },
  {
    value: 309,
    day: "2018-07-14"
  },
  {
    value: 365,
    day: "2018-06-25"
  },
  {
    value: 145,
    day: "2017-12-14"
  },
  {
    value: 308,
    day: "2016-02-10"
  },
  {
    value: 87,
    day: "2018-04-21"
  },
  {
    value: 38,
    day: "2016-01-08"
  },
  {
    value: 122,
    day: "2017-01-23"
  },
  {
    value: 294,
    day: "2016-06-07"
  },
  {
    value: 169,
    day: "2017-07-27"
  },
  {
    value: 353,
    day: "2016-02-13"
  },
  {
    value: 51,
    day: "2018-04-06"
  },
  {
    value: 174,
    day: "2015-10-08"
  },
  {
    value: 333,
    day: "2015-12-14"
  },
  {
    value: 292,
    day: "2016-02-21"
  },
  {
    value: 149,
    day: "2018-06-24"
  },
  {
    value: 119,
    day: "2018-02-01"
  },
  {
    value: 280,
    day: "2016-01-16"
  },
  {
    value: 400,
    day: "2018-07-26"
  },
  {
    value: 140,
    day: "2016-01-27"
  },
  {
    value: 278,
    day: "2015-04-14"
  },
  {
    value: 230,
    day: "2018-06-20"
  },
  {
    value: 324,
    day: "2017-07-15"
  },
  {
    value: 178,
    day: "2015-05-14"
  },
  {
    value: 217,
    day: "2018-08-09"
  },
  {
    value: 173,
    day: "2018-07-12"
  },
  {
    value: 376,
    day: "2016-07-25"
  },
  {
    value: 117,
    day: "2018-08-05"
  },
  {
    value: 322,
    day: "2017-05-07"
  },
  {
    value: 178,
    day: "2016-03-25"
  },
  {
    value: 4,
    day: "2017-12-10"
  },
  {
    value: 389,
    day: "2016-08-01"
  },
  {
    value: 278,
    day: "2016-03-03"
  },
  {
    value: 358,
    day: "2017-08-15"
  },
  {
    value: 279,
    day: "2016-01-21"
  },
  {
    value: 220,
    day: "2017-11-05"
  },
  {
    value: 379,
    day: "2016-12-12"
  },
  {
    value: 29,
    day: "2016-02-19"
  },
  {
    value: 131,
    day: "2016-04-10"
  },
  {
    value: 17,
    day: "2015-12-08"
  },
  {
    value: 327,
    day: "2016-07-12"
  },
  {
    value: 333,
    day: "2017-06-23"
  },
  {
    value: 242,
    day: "2016-06-21"
  },
  {
    value: 170,
    day: "2015-11-10"
  },
  {
    value: 247,
    day: "2016-11-09"
  },
  {
    value: 384,
    day: "2017-12-30"
  },
  {
    value: 322,
    day: "2016-12-05"
  },
  {
    value: 263,
    day: "2015-06-07"
  },
  {
    value: 253,
    day: "2015-07-20"
  },
  {
    value: 50,
    day: "2016-05-14"
  },
  {
    value: 197,
    day: "2016-03-05"
  },
  {
    value: 260,
    day: "2015-11-30"
  },
  {
    value: 381,
    day: "2016-07-28"
  },
  {
    value: 308,
    day: "2018-06-03"
  },
  {
    value: 24,
    day: "2015-05-27"
  },
  {
    value: 142,
    day: "2016-04-05"
  },
  {
    value: 108,
    day: "2015-06-22"
  },
  {
    value: 389,
    day: "2016-09-28"
  },
  {
    value: 48,
    day: "2015-11-06"
  },
  {
    value: 149,
    day: "2015-05-16"
  },
  {
    value: 19,
    day: "2017-04-08"
  },
  {
    value: 273,
    day: "2017-04-06"
  },
  {
    value: 85,
    day: "2016-05-08"
  },
  {
    value: 272,
    day: "2015-07-09"
  },
  {
    value: 195,
    day: "2017-03-04"
  },
  {
    value: 7,
    day: "2018-04-28"
  },
  {
    value: 71,
    day: "2015-11-07"
  },
  {
    value: 223,
    day: "2016-12-16"
  },
  {
    value: 393,
    day: "2017-04-17"
  },
  {
    value: 24,
    day: "2016-09-23"
  },
  {
    value: 52,
    day: "2015-04-04"
  },
  {
    value: 65,
    day: "2016-03-02"
  },
  {
    value: 177,
    day: "2018-03-14"
  },
  {
    value: 34,
    day: "2017-06-11"
  },
  {
    value: 188,
    day: "2017-05-17"
  },
  {
    value: 283,
    day: "2017-11-10"
  },
  {
    value: 115,
    day: "2017-12-11"
  },
  {
    value: 166,
    day: "2015-10-07"
  },
  {
    value: 4,
    day: "2016-07-14"
  },
  {
    value: 320,
    day: "2018-07-24"
  },
  {
    value: 36,
    day: "2016-03-14"
  },
  {
    value: 299,
    day: "2016-09-05"
  },
  {
    value: 33,
    day: "2017-01-11"
  },
  {
    value: 289,
    day: "2016-07-18"
  },
  {
    value: 150,
    day: "2018-05-11"
  },
  {
    value: 182,
    day: "2016-08-16"
  },
  {
    value: 396,
    day: "2016-09-29"
  },
  {
    value: 241,
    day: "2016-04-20"
  },
  {
    value: 385,
    day: "2018-06-22"
  },
  {
    value: 92,
    day: "2017-04-14"
  },
  {
    value: 227,
    day: "2015-11-09"
  },
  {
    value: 176,
    day: "2015-06-03"
  },
  {
    value: 142,
    day: "2018-01-08"
  },
  {
    value: 95,
    day: "2016-02-15"
  },
  {
    value: 174,
    day: "2015-04-02"
  },
  {
    value: 192,
    day: "2017-12-18"
  },
  {
    value: 267,
    day: "2015-11-24"
  },
  {
    value: 328,
    day: "2016-05-30"
  },
  {
    value: 76,
    day: "2017-10-18"
  },
  {
    value: 382,
    day: "2018-06-14"
  },
  {
    value: 287,
    day: "2016-02-18"
  },
  {
    value: 264,
    day: "2016-08-22"
  },
  {
    value: 249,
    day: "2017-03-27"
  },
  {
    value: 215,
    day: "2017-05-22"
  },
  {
    value: 143,
    day: "2017-08-20"
  },
  {
    value: 252,
    day: "2018-04-30"
  },
  {
    value: 336,
    day: "2015-11-03"
  },
  {
    value: 101,
    day: "2015-10-16"
  },
  {
    value: 239,
    day: "2015-04-12"
  },
  {
    value: 207,
    day: "2015-06-29"
  },
  {
    value: 202,
    day: "2017-11-14"
  },
  {
    value: 146,
    day: "2015-04-11"
  },
  {
    value: 338,
    day: "2017-02-06"
  },
  {
    value: 293,
    day: "2015-11-13"
  },
  {
    value: 317,
    day: "2017-08-16"
  },
  {
    value: 179,
    day: "2015-08-26"
  },
  {
    value: 165,
    day: "2017-04-19"
  },
  {
    value: 133,
    day: "2018-01-14"
  },
  {
    value: 23,
    day: "2017-10-14"
  },
  {
    value: 316,
    day: "2015-10-29"
  },
  {
    value: 15,
    day: "2016-08-03"
  },
  {
    value: 160,
    day: "2016-09-13"
  },
  {
    value: 145,
    day: "2017-07-07"
  },
  {
    value: 363,
    day: "2018-06-04"
  },
  {
    value: 170,
    day: "2016-08-06"
  },
  {
    value: 52,
    day: "2017-08-05"
  },
  {
    value: 137,
    day: "2016-12-17"
  },
  {
    value: 218,
    day: "2017-04-24"
  },
  {
    value: 370,
    day: "2017-11-23"
  },
  {
    value: 185,
    day: "2018-01-29"
  },
  {
    value: 157,
    day: "2015-12-17"
  },
  {
    value: 210,
    day: "2016-04-23"
  },
  {
    value: 169,
    day: "2015-12-05"
  },
  {
    value: 125,
    day: "2017-10-13"
  },
  {
    value: 362,
    day: "2018-03-29"
  },
  {
    value: 130,
    day: "2015-05-03"
  },
  {
    value: 202,
    day: "2016-02-08"
  },
  {
    value: 101,
    day: "2018-02-24"
  },
  {
    value: 169,
    day: "2016-05-26"
  },
  {
    value: 100,
    day: "2017-09-25"
  },
  {
    value: 138,
    day: "2016-03-30"
  },
  {
    value: 40,
    day: "2016-10-19"
  },
  {
    value: 52,
    day: "2016-02-29"
  },
  {
    value: 313,
    day: "2015-10-06"
  },
  {
    value: 127,
    day: "2015-11-01"
  },
  {
    value: 198,
    day: "2018-04-19"
  },
  {
    value: 273,
    day: "2015-07-06"
  },
  {
    value: 75,
    day: "2017-12-28"
  },
  {
    value: 234,
    day: "2016-09-15"
  },
  {
    value: 196,
    day: "2017-08-23"
  },
  {
    value: 375,
    day: "2016-07-08"
  },
  {
    value: 157,
    day: "2016-08-26"
  },
  {
    value: 323,
    day: "2018-01-12"
  },
  {
    value: 288,
    day: "2017-08-24"
  },
  {
    value: 157,
    day: "2018-01-07"
  },
  {
    value: 131,
    day: "2016-12-02"
  },
  {
    value: 124,
    day: "2015-06-05"
  },
  {
    value: 396,
    day: "2017-03-29"
  },
  {
    value: 43,
    day: "2018-07-28"
  },
  {
    value: 267,
    day: "2016-10-11"
  },
  {
    value: 162,
    day: "2018-05-03"
  },
  {
    value: 186,
    day: "2017-12-05"
  },
  {
    value: 229,
    day: "2018-02-22"
  },
  {
    value: 26,
    day: "2016-06-02"
  },
  {
    value: 389,
    day: "2017-08-26"
  },
  {
    value: 333,
    day: "2017-01-19"
  },
  {
    value: 239,
    day: "2018-02-08"
  },
  {
    value: 81,
    day: "2017-09-09"
  },
  {
    value: 138,
    day: "2015-10-10"
  },
  {
    value: 228,
    day: "2017-09-24"
  },
  {
    value: 56,
    day: "2015-12-12"
  },
  {
    value: 348,
    day: "2015-04-25"
  },
  {
    value: 337,
    day: "2017-09-14"
  },
  {
    value: 176,
    day: "2017-02-16"
  },
  {
    value: 334,
    day: "2015-12-23"
  },
  {
    value: 39,
    day: "2015-08-16"
  },
  {
    value: 110,
    day: "2017-07-06"
  },
  {
    value: 315,
    day: "2016-01-14"
  },
  {
    value: 35,
    day: "2017-12-13"
  },
  {
    value: 125,
    day: "2018-06-05"
  },
  {
    value: 241,
    day: "2015-09-29"
  },
  {
    value: 231,
    day: "2018-01-19"
  },
  {
    value: 88,
    day: "2016-12-20"
  },
  {
    value: 386,
    day: "2017-10-19"
  },
  {
    value: 124,
    day: "2015-06-04"
  },
  {
    value: 309,
    day: "2015-12-07"
  },
  {
    value: 218,
    day: "2017-03-19"
  },
  {
    value: 41,
    day: "2016-11-10"
  },
  {
    value: 228,
    day: "2016-11-04"
  },
  {
    value: 278,
    day: "2015-04-22"
  },
  {
    value: 150,
    day: "2015-11-22"
  },
  {
    value: 180,
    day: "2017-12-20"
  },
  {
    value: 127,
    day: "2018-05-31"
  },
  {
    value: 88,
    day: "2017-12-17"
  },
  {
    value: 71,
    day: "2015-07-05"
  },
  {
    value: 225,
    day: "2018-08-11"
  },
  {
    value: 123,
    day: "2017-10-07"
  },
  {
    value: 319,
    day: "2017-10-08"
  },
  {
    value: 64,
    day: "2018-03-18"
  },
  {
    value: 166,
    day: "2018-01-15"
  },
  {
    value: 228,
    day: "2017-05-31"
  },
  {
    value: 196,
    day: "2018-04-26"
  },
  {
    value: 320,
    day: "2017-08-08"
  },
  {
    value: 229,
    day: "2016-11-29"
  },
  {
    value: 389,
    day: "2016-08-20"
  },
  {
    value: 249,
    day: "2017-06-20"
  },
  {
    value: 248,
    day: "2015-11-23"
  },
  {
    value: 63,
    day: "2016-01-22"
  },
  {
    value: 240,
    day: "2015-09-11"
  },
  {
    value: 162,
    day: "2017-07-21"
  },
  {
    value: 350,
    day: "2017-10-15"
  },
  {
    value: 395,
    day: "2017-02-28"
  },
  {
    value: 57,
    day: "2017-09-10"
  },
  {
    value: 58,
    day: "2016-11-03"
  },
  {
    value: 89,
    day: "2015-11-19"
  },
  {
    value: 53,
    day: "2016-02-03"
  },
  {
    value: 224,
    day: "2018-05-05"
  },
  {
    value: 362,
    day: "2016-04-01"
  },
  {
    value: 20,
    day: "2017-09-20"
  },
  {
    value: 2,
    day: "2015-09-01"
  },
  {
    value: 308,
    day: "2016-07-31"
  },
  {
    value: 57,
    day: "2016-01-01"
  },
  {
    value: 148,
    day: "2016-01-29"
  },
  {
    value: 333,
    day: "2017-10-26"
  },
  {
    value: 250,
    day: "2018-07-09"
  },
  {
    value: 388,
    day: "2015-09-24"
  },
  {
    value: 345,
    day: "2016-02-27"
  },
  {
    value: 89,
    day: "2018-01-04"
  },
  {
    value: 308,
    day: "2016-04-13"
  },
  {
    value: 27,
    day: "2016-05-01"
  },
  {
    value: 56,
    day: "2015-07-21"
  },
  {
    value: 245,
    day: "2017-04-16"
  },
  {
    value: 203,
    day: "2015-10-17"
  },
  {
    value: 323,
    day: "2017-02-20"
  },
  {
    value: 330,
    day: "2016-12-28"
  },
  {
    value: 336,
    day: "2015-11-04"
  },
  {
    value: 259,
    day: "2016-05-20"
  },
  {
    value: 135,
    day: "2017-08-03"
  },
  {
    value: 305,
    day: "2018-01-22"
  },
  {
    value: 258,
    day: "2016-06-05"
  },
  {
    value: 17,
    day: "2017-09-27"
  },
  {
    value: 315,
    day: "2017-06-29"
  },
  {
    value: 143,
    day: "2016-03-31"
  },
  {
    value: 120,
    day: "2015-09-02"
  },
  {
    value: 61,
    day: "2015-12-09"
  },
  {
    value: 47,
    day: "2016-01-28"
  },
  {
    value: 98,
    day: "2015-11-29"
  },
  {
    value: 24,
    day: "2015-05-25"
  },
  {
    value: 332,
    day: "2016-10-10"
  },
  {
    value: 8,
    day: "2017-11-13"
  },
  {
    value: 87,
    day: "2016-01-19"
  },
  {
    value: 304,
    day: "2018-07-10"
  },
  {
    value: 304,
    day: "2015-08-05"
  },
  {
    value: 327,
    day: "2016-12-18"
  },
  {
    value: 114,
    day: "2017-08-09"
  },
  {
    value: 90,
    day: "2017-03-09"
  },
  {
    value: 293,
    day: "2015-10-31"
  },
  {
    value: 65,
    day: "2015-04-08"
  },
  {
    value: 149,
    day: "2016-06-26"
  },
  {
    value: 180,
    day: "2018-07-05"
  },
  {
    value: 136,
    day: "2017-07-24"
  },
  {
    value: 120,
    day: "2018-06-09"
  },
  {
    value: 82,
    day: "2017-07-31"
  },
  {
    value: 331,
    day: "2018-03-16"
  },
  {
    value: 201,
    day: "2018-01-13"
  },
  {
    value: 269,
    day: "2017-08-13"
  },
  {
    value: 227,
    day: "2018-07-19"
  },
  {
    value: 176,
    day: "2017-10-10"
  },
  {
    value: 390,
    day: "2017-05-13"
  },
  {
    value: 345,
    day: "2017-12-21"
  },
  {
    value: 235,
    day: "2015-09-10"
  },
  {
    value: 268,
    day: "2018-02-04"
  },
  {
    value: 365,
    day: "2015-10-26"
  },
  {
    value: 393,
    day: "2018-03-31"
  },
  {
    value: 5,
    day: "2015-08-01"
  },
  {
    value: 348,
    day: "2018-07-06"
  },
  {
    value: 352,
    day: "2015-06-30"
  },
  {
    value: 336,
    day: "2016-11-18"
  },
  {
    value: 123,
    day: "2016-07-23"
  },
  {
    value: 209,
    day: "2017-01-28"
  },
  {
    value: 330,
    day: "2015-08-28"
  },
  {
    value: 283,
    day: "2017-05-26"
  },
  {
    value: 145,
    day: "2017-08-29"
  },
  {
    value: 5,
    day: "2018-03-13"
  },
  {
    value: 396,
    day: "2017-08-04"
  },
  {
    value: 71,
    day: "2015-08-30"
  },
  {
    value: 362,
    day: "2018-07-18"
  },
  {
    value: 10,
    day: "2015-04-23"
  },
  {
    value: 253,
    day: "2017-09-13"
  },
  {
    value: 88,
    day: "2016-03-26"
  },
  {
    value: 93,
    day: "2016-10-23"
  },
  {
    value: 173,
    day: "2017-11-21"
  },
  {
    value: 218,
    day: "2017-03-25"
  },
  {
    value: 42,
    day: "2015-10-03"
  },
  {
    value: 59,
    day: "2015-04-26"
  },
  {
    value: 357,
    day: "2018-05-01"
  },
  {
    value: 248,
    day: "2016-11-01"
  },
  {
    value: 382,
    day: "2017-11-18"
  },
  {
    value: 109,
    day: "2016-10-13"
  },
  {
    value: 66,
    day: "2017-10-01"
  },
  {
    value: 28,
    day: "2017-04-13"
  },
  {
    value: 314,
    day: "2015-12-24"
  },
  {
    value: 227,
    day: "2018-03-17"
  },
  {
    value: 82,
    day: "2017-01-05"
  },
  {
    value: 14,
    day: "2017-12-16"
  },
  {
    value: 122,
    day: "2017-04-10"
  },
  {
    value: 215,
    day: "2016-10-31"
  },
  {
    value: 363,
    day: "2018-06-18"
  },
  {
    value: 86,
    day: "2018-03-04"
  },
  {
    value: 260,
    day: "2018-01-30"
  },
  {
    value: 219,
    day: "2017-07-22"
  },
  {
    value: 357,
    day: "2018-01-23"
  },
  {
    value: 30,
    day: "2016-06-11"
  },
  {
    value: 270,
    day: "2017-12-25"
  },
  {
    value: 209,
    day: "2018-07-11"
  },
  {
    value: 189,
    day: "2015-06-12"
  },
  {
    value: 280,
    day: "2016-01-03"
  },
  {
    value: 204,
    day: "2018-02-11"
  },
  {
    value: 365,
    day: "2016-01-20"
  },
  {
    value: 192,
    day: "2016-03-21"
  },
  {
    value: 235,
    day: "2016-07-29"
  },
  {
    value: 133,
    day: "2017-10-17"
  },
  {
    value: 77,
    day: "2017-02-12"
  },
  {
    value: 289,
    day: "2018-01-24"
  },
  {
    value: 291,
    day: "2016-07-15"
  },
  {
    value: 4,
    day: "2017-12-26"
  },
  {
    value: 286,
    day: "2015-11-25"
  },
  {
    value: 44,
    day: "2018-07-30"
  },
  {
    value: 81,
    day: "2015-06-24"
  },
  {
    value: 34,
    day: "2016-11-27"
  },
  {
    value: 386,
    day: "2015-04-19"
  },
  {
    value: 343,
    day: "2017-08-12"
  },
  {
    value: 252,
    day: "2016-11-15"
  },
  {
    value: 338,
    day: "2016-02-11"
  },
  {
    value: 318,
    day: "2016-06-14"
  },
  {
    value: 215,
    day: "2015-07-16"
  },
  {
    value: 257,
    day: "2016-07-21"
  },
  {
    value: 37,
    day: "2017-07-03"
  },
  {
    value: 245,
    day: "2017-05-04"
  },
  {
    value: 93,
    day: "2016-06-17"
  },
  {
    value: 166,
    day: "2016-09-18"
  },
  {
    value: 51,
    day: "2016-06-18"
  },
  {
    value: 242,
    day: "2017-12-27"
  },
  {
    value: 131,
    day: "2018-05-09"
  },
  {
    value: 282,
    day: "2016-04-11"
  },
  {
    value: 252,
    day: "2017-06-10"
  },
  {
    value: 318,
    day: "2018-02-20"
  },
  {
    value: 197,
    day: "2016-03-15"
  },
  {
    value: 347,
    day: "2015-09-05"
  },
  {
    value: 90,
    day: "2017-03-03"
  },
  {
    value: 239,
    day: "2017-12-29"
  },
  {
    value: 135,
    day: "2017-01-30"
  },
  {
    value: 79,
    day: "2018-03-10"
  },
  {
    value: 97,
    day: "2018-08-08"
  },
  {
    value: 100,
    day: "2018-04-01"
  },
  {
    value: 280,
    day: "2018-03-27"
  },
  {
    value: 183,
    day: "2017-07-05"
  },
  {
    value: 218,
    day: "2016-04-09"
  },
  {
    value: 341,
    day: "2018-05-10"
  },
  {
    value: 384,
    day: "2015-07-01"
  },
  {
    value: 196,
    day: "2017-01-21"
  },
  {
    value: 9,
    day: "2015-07-03"
  },
  {
    value: 67,
    day: "2017-09-02"
  },
  {
    value: 49,
    day: "2018-07-16"
  },
  {
    value: 216,
    day: "2017-09-26"
  },
  {
    value: 384,
    day: "2017-06-14"
  },
  {
    value: 352,
    day: "2017-07-23"
  },
  {
    value: 137,
    day: "2017-07-02"
  },
  {
    value: 239,
    day: "2018-07-13"
  },
  {
    value: 244,
    day: "2015-05-13"
  },
  {
    value: 139,
    day: "2016-11-30"
  },
  {
    value: 220,
    day: "2016-10-17"
  },
  {
    value: 395,
    day: "2016-01-07"
  },
  {
    value: 382,
    day: "2017-06-02"
  },
  {
    value: 181,
    day: "2017-11-11"
  },
  {
    value: 274,
    day: "2017-06-13"
  },
  {
    value: 348,
    day: "2016-10-22"
  },
  {
    value: 166,
    day: "2016-01-24"
  },
  {
    value: 47,
    day: "2016-07-17"
  },
  {
    value: 220,
    day: "2015-07-04"
  },
  {
    value: 213,
    day: "2016-02-16"
  },
  {
    value: 101,
    day: "2018-07-31"
  },
  {
    value: 107,
    day: "2016-12-25"
  },
  {
    value: 25,
    day: "2018-06-10"
  },
  {
    value: 112,
    day: "2017-02-21"
  },
  {
    value: 256,
    day: "2017-11-01"
  },
  {
    value: 376,
    day: "2018-03-02"
  },
  {
    value: 357,
    day: "2017-03-26"
  },
  {
    value: 20,
    day: "2016-11-08"
  },
  {
    value: 144,
    day: "2018-08-07"
  },
  {
    value: 354,
    day: "2018-04-24"
  },
  {
    value: 343,
    day: "2017-06-17"
  },
  {
    value: 331,
    day: "2017-12-31"
  },
  {
    value: 243,
    day: "2018-08-06"
  },
  {
    value: 290,
    day: "2015-05-31"
  },
  {
    value: 228,
    day: "2017-06-07"
  },
  {
    value: 320,
    day: "2016-01-06"
  },
  {
    value: 243,
    day: "2016-05-18"
  },
  {
    value: 124,
    day: "2016-07-16"
  },
  {
    value: 257,
    day: "2015-09-20"
  },
  {
    value: 156,
    day: "2016-05-15"
  },
  {
    value: 223,
    day: "2018-03-06"
  },
  {
    value: 114,
    day: "2017-05-06"
  },
  {
    value: 224,
    day: "2016-07-13"
  },
  {
    value: 44,
    day: "2015-07-31"
  },
  {
    value: 284,
    day: "2018-05-24"
  },
  {
    value: 100,
    day: "2015-04-06"
  },
  {
    value: 125,
    day: "2017-07-20"
  },
  {
    value: 336,
    day: "2017-07-16"
  },
  {
    value: 47,
    day: "2016-01-02"
  },
  {
    value: 346,
    day: "2016-11-23"
  },
  {
    value: 49,
    day: "2017-08-22"
  },
  {
    value: 237,
    day: "2015-05-21"
  },
  {
    value: 125,
    day: "2016-12-07"
  },
  {
    value: 280,
    day: "2018-07-01"
  },
  {
    value: 242,
    day: "2017-02-22"
  },
  {
    value: 103,
    day: "2016-04-08"
  },
  {
    value: 89,
    day: "2018-05-22"
  },
  {
    value: 108,
    day: "2017-08-19"
  },
  {
    value: 271,
    day: "2015-07-19"
  },
  {
    value: 304,
    day: "2015-04-07"
  },
  {
    value: 298,
    day: "2015-12-16"
  },
  {
    value: 21,
    day: "2016-06-06"
  },
  {
    value: 59,
    day: "2015-04-28"
  },
  {
    value: 119,
    day: "2017-05-12"
  },
  {
    value: 95,
    day: "2017-09-18"
  },
  {
    value: 243,
    day: "2017-01-10"
  },
  {
    value: 378,
    day: "2017-06-03"
  },
  {
    value: 144,
    day: "2016-10-08"
  },
  {
    value: 310,
    day: "2017-01-18"
  },
  {
    value: 154,
    day: "2017-03-24"
  },
  {
    value: 35,
    day: "2018-03-03"
  },
  {
    value: 165,
    day: "2016-12-23"
  },
  {
    value: 271,
    day: "2018-02-10"
  },
  {
    value: 368,
    day: "2017-01-02"
  },
  {
    value: 316,
    day: "2017-03-30"
  },
  {
    value: 304,
    day: "2015-12-29"
  },
  {
    value: 106,
    day: "2017-07-17"
  },
  {
    value: 68,
    day: "2016-01-26"
  },
  {
    value: 23,
    day: "2017-09-29"
  },
  {
    value: 354,
    day: "2015-09-23"
  },
  {
    value: 29,
    day: "2018-05-17"
  },
  {
    value: 11,
    day: "2016-04-16"
  },
  {
    value: 156,
    day: "2017-10-21"
  },
  {
    value: 171,
    day: "2017-02-24"
  },
  {
    value: 207,
    day: "2016-11-14"
  },
  {
    value: 219,
    day: "2015-09-04"
  },
  {
    value: 122,
    day: "2017-09-30"
  },
  {
    value: 143,
    day: "2015-05-22"
  },
  {
    value: 133,
    day: "2016-05-27"
  },
  {
    value: 195,
    day: "2016-02-04"
  },
  {
    value: 172,
    day: "2016-03-06"
  },
  {
    value: 23,
    day: "2016-06-01"
  },
  {
    value: 84,
    day: "2018-02-25"
  },
  {
    value: 318,
    day: "2017-03-11"
  },
  {
    value: 152,
    day: "2016-11-26"
  },
  {
    value: 341,
    day: "2017-01-29"
  },
  {
    value: 48,
    day: "2015-11-11"
  },
  {
    value: 312,
    day: "2015-06-08"
  },
  {
    value: 375,
    day: "2017-12-19"
  },
  {
    value: 380,
    day: "2017-05-25"
  },
  {
    value: 237,
    day: "2015-10-23"
  }
];

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveCalendar = ({ data /* see data tab */ }) => (
  <ResponsiveCalendar
    data={data}
    from="2015-03-01"
    to="2016-07-12"
    emptyColor="#eeeeee"
    colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
    yearSpacing={40}
    monthBorderColor="#ffffff"
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
    legends={[
      {
        anchor: "bottom-right",
        direction: "row",
        translateY: 36,
        itemCount: 4,
        itemWidth: 42,
        itemHeight: 36,
        itemsSpacing: 14,
        itemDirection: "right-to-left"
      }
    ]}
  />
);

function ProjectTimeline() {
  return (
    <>
      <h1>Timeline view of a case</h1>
      <h2>Detailed timeline</h2>
      <CustomizedTimeline />
      <h2>Edits during the project</h2>
      <Box width="100%" height={300}>
        <MyResponsiveCalendar data={edits} />
      </Box>
    </>
  );
}

export default ProjectTimeline;
