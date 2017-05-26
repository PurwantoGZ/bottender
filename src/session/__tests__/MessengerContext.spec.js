import MessengerContext from '../MessengerContext';
import MessengerEvent from '../MessengerEvent';
import SessionData from '../SessionData';

jest.mock('delay');
jest.mock('messaging-api-messenger');
jest.mock('../../database/resolve');

afterEach(() => {
  jest.useRealTimers();
});

const createMockGraphAPIClient = () => ({
  turnTypingIndicatorsOn: jest.fn(),
  turnTypingIndicatorsOff: jest.fn(),
});

const rawEvent = {
  sender: { id: '1423587017700273' },
  recipient: { id: '404217156637689' },
  timestamp: 1491796363181,
  message: {
    mid: 'mid.$cAAE1UUyiiwthh0NPrVbVf4HFNDGl',
    seq: 348847,
    text: '請給我背影',
  },
};

const setup = () => {
  const client = createMockGraphAPIClient();
  const data = new SessionData({
    user: {
      id: 'fakeUserId',
    },
  });
  const args = {
    graphAPIClient: client,
    rawEvent,
    data,
  };
  const context = new MessengerContext(args);
  return {
    context,
    data,
    client,
  };
};

it('be defined', () => {
  const { context } = setup();
  expect(context).toBeDefined();
});

it('get #data works', () => {
  const { context, data } = setup();
  expect(context.data).toBe(data);
});

it('get #event works', () => {
  const { context } = setup();
  expect(context.event).toBeInstanceOf(MessengerEvent);
});

it('#sendText put sendText to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  context.sendText('xxx.com');

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendText',
    args: [data.user.id, 'xxx.com'],
    delay: 1000,
    showIndicators: true,
  });
});

it('#sendIssueResolutionText put sendIssueResolutionText to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  context.sendIssueResolutionText('xxx.com');

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendIssueResolutionText',
    args: [data.user.id, 'xxx.com'],
    delay: 1000,
    showIndicators: true,
  });
});

it('#sendImage put sendImage to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  context.sendImage('xxx.com');

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendImage',
    args: [data.user.id, 'xxx.com'],
    delay: 1000,
    showIndicators: true,
  });
});

it('#sendAudio put sendAudio to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  context.sendAudio('xxx.com');

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendAudio',
    args: [data.user.id, 'xxx.com'],
    delay: 1000,
    showIndicators: true,
  });
});

it('#sendVideo put sendVideo to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  context.sendVideo('xxx.com');

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendVideo',
    args: [data.user.id, 'xxx.com'],
    delay: 1000,
    showIndicators: true,
  });
});

it('#sendFile put sendFile to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  context.sendFile('xxx.com');

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendFile',
    args: [data.user.id, 'xxx.com'],
    delay: 1000,
    showIndicators: true,
  });
});

it('#sendQuickReplies put sendQuickReplies to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  const quickReplies = [];

  context.sendQuickReplies({ text: 'xxx.com' }, quickReplies);

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendQuickReplies',
    args: [data.user.id, { text: 'xxx.com' }, quickReplies],
    delay: 1000,
    showIndicators: true,
  });
});

it('#sendGenericTemplate put sendGenericTemplate to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  const elements = {};
  const ratio = '';

  context.sendGenericTemplate(elements, ratio);

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendGenericTemplate',
    args: [data.user.id, elements, ratio],
    delay: 1000,
    showIndicators: true,
  });
});

it('#sendShippingUpdateTemplate put sendShippingUpdateTemplate to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  const elements = {};
  const ratio = '';

  context.sendShippingUpdateTemplate(elements, ratio);

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendShippingUpdateTemplate',
    args: [data.user.id, elements, ratio],
    delay: 1000,
    showIndicators: true,
  });
});

it('#sendReservationUpdateTemplate put sendReservationUpdateTemplate to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  const elements = {};
  const ratio = '';

  context.sendReservationUpdateTemplate(elements, ratio);

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendReservationUpdateTemplate',
    args: [data.user.id, elements, ratio],
    delay: 1000,
    showIndicators: true,
  });
});

it('#sendIssueResolutionTemplate put sendIssueResolutionTemplate to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  const elements = {};
  const ratio = '';

  context.sendIssueResolutionTemplate(elements, ratio);

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendIssueResolutionTemplate',
    args: [data.user.id, elements, ratio],
    delay: 1000,
    showIndicators: true,
  });
});

it('#sendButtonTemplate put sendButtonTemplate to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  const buttons = [];

  context.sendButtonTemplate('yayaya', buttons);

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendButtonTemplate',
    args: [data.user.id, 'yayaya', buttons],
    delay: 1000,
    showIndicators: true,
  });
});

it('#sendListTemplate put sendListTemplate to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  const elements = [];
  const buttons = [];

  context.sendListTemplate(elements, buttons, 'large');

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendListTemplate',
    args: [data.user.id, elements, buttons, 'large'],
    delay: 1000,
    showIndicators: true,
  });
});

it('#sendReceiptTemplate put sendReceiptTemplate to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  const receipt = {};

  context.sendReceiptTemplate(receipt);

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendReceiptTemplate',
    args: [data.user.id, receipt],
    delay: 1000,
    showIndicators: true,
  });
});

it('#sendAirlineBoardingPassTemplate put sendAirlineBoardingPassTemplate to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  const boardingPass = {};

  context.sendAirlineBoardingPassTemplate(boardingPass);

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendAirlineBoardingPassTemplate',
    args: [data.user.id, boardingPass],
    delay: 1000,
    showIndicators: true,
  });
});

it('#sendAirlineCheckinTemplate put sendAirlineCheckinTemplate to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  const checkin = {};

  context.sendAirlineCheckinTemplate(checkin);

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendAirlineCheckinTemplate',
    args: [data.user.id, checkin],
    delay: 1000,
    showIndicators: true,
  });
});

it('#sendAirlineItineraryTemplate put sendAirlineItineraryTemplate to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  const itinerary = {};

  context.sendAirlineItineraryTemplate(itinerary);

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendAirlineItineraryTemplate',
    args: [data.user.id, itinerary],
    delay: 1000,
    showIndicators: true,
  });
});

it('#sendAirlineFlightUpdateTemplate put sendAirlineFlightUpdateTemplate to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  const flightUpdate = {};

  context.sendAirlineFlightUpdateTemplate(flightUpdate);

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendAirlineFlightUpdateTemplate',
    args: [data.user.id, flightUpdate],
    delay: 1000,
    showIndicators: true,
  });
});

it('#turnTypingIndicatorsOn call client turnTypingIndicatorsOn', () => {
  const { context, client, data } = setup();
  context.turnTypingIndicatorsOn();
  expect(client.turnTypingIndicatorsOn).toBeCalledWith(data.user.id);
});

it('#turnTypingIndicatorsOff call client turnTypingIndicatorsOff', () => {
  const { context, client, data } = setup();
  context.turnTypingIndicatorsOff();
  expect(client.turnTypingIndicatorsOff).toBeCalledWith(data.user.id);
});

it('use default message delay', () => {
  const { context, client, data } = setup();

  context._jobQueue = {
    enqueue: jest.fn(),
  };

  context.sendText('yooooooo~');

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendText',
    args: [data.user.id, 'yooooooo~'],
    delay: 1000,
    showIndicators: true,
  });
});

it('should not sendText to enqueu in jobQueue when paused', () => {
  const { context } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  context.hitl.pause();

  context.sendText('xxx.com');

  expect(context._jobQueue.enqueue).not.toBeCalled();
});

it('should sendText to enqueu in jobQueue when resumed', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  context.hitl.pause();
  context.hitl.unpause();

  context.sendText('xxx.com');

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendText',
    args: [data.user.id, 'xxx.com'],
    delay: 1000,
    showIndicators: true,
  });
});

it('has send to methods', () => {
  const { context } = setup();
  expect(context.sendTextTo).toBeDefined();
  expect(context.sendIssueResolutionTextTo).toBeDefined();
  expect(context.sendImageTo).toBeDefined();
  expect(context.sendAudioTo).toBeDefined();
  expect(context.sendVideoTo).toBeDefined();
  expect(context.sendFileTo).toBeDefined();
  expect(context.sendQuickRepliesTo).toBeDefined();
  expect(context.sendGenericTemplateTo).toBeDefined();
  expect(context.sendShippingUpdateTemplateTo).toBeDefined();
  expect(context.sendReservationUpdateTemplateTo).toBeDefined();
  expect(context.sendIssueResolutionTemplateTo).toBeDefined();
  expect(context.sendButtonTemplateTo).toBeDefined();
  expect(context.sendListTemplateTo).toBeDefined();
  expect(context.sendReceiptTemplateTo).toBeDefined();
  expect(context.sendAirlineBoardingPassTemplateTo).toBeDefined();
  expect(context.sendAirlineCheckinTemplateTo).toBeDefined();
  expect(context.sendAirlineItineraryTemplateTo).toBeDefined();
  expect(context.sendAirlineFlightUpdateTemplateTo).toBeDefined();
});

it('#sendTextTo put sendText to jobQueue', () => {
  const { context, client } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  context.sendTextTo('uid_1', 'xxx.com');

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendText',
    args: ['uid_1', 'xxx.com'],
    delay: 0,
    showIndicators: false,
  });
});

it('has send with delay methods', () => {
  const { context } = setup();
  expect(context.sendTextWithDelay).toBeDefined();
  expect(context.sendIssueResolutionTextWithDelay).toBeDefined();
  expect(context.sendImageWithDelay).toBeDefined();
  expect(context.sendAudioWithDelay).toBeDefined();
  expect(context.sendVideoWithDelay).toBeDefined();
  expect(context.sendFileWithDelay).toBeDefined();
  expect(context.sendQuickRepliesWithDelay).toBeDefined();
  expect(context.sendGenericTemplateWithDelay).toBeDefined();
  expect(context.sendShippingUpdateTemplateWithDelay).toBeDefined();
  expect(context.sendReservationUpdateTemplateWithDelay).toBeDefined();
  expect(context.sendIssueResolutionTemplateWithDelay).toBeDefined();
  expect(context.sendButtonTemplateWithDelay).toBeDefined();
  expect(context.sendListTemplateWithDelay).toBeDefined();
  expect(context.sendReceiptTemplateWithDelay).toBeDefined();
  expect(context.sendAirlineBoardingPassTemplateWithDelay).toBeDefined();
  expect(context.sendAirlineCheckinTemplateWithDelay).toBeDefined();
  expect(context.sendAirlineItineraryTemplateWithDelay).toBeDefined();
  expect(context.sendAirlineFlightUpdateTemplateWithDelay).toBeDefined();
});

it('#sendTextWithDelay put sendText to jobQueue', () => {
  const { context, client, data } = setup();
  context._jobQueue = {
    enqueue: jest.fn(),
  };

  context.sendTextWithDelay(3000, 'xxx.com');

  expect(context._jobQueue.enqueue).toBeCalledWith({
    instance: client,
    method: 'sendText',
    args: [data.user.id, 'xxx.com'],
    delay: 3000,
    showIndicators: true,
  });
});

it('show typing when sending', async () => {
  jest.useFakeTimers();

  const { context, client } = setup();

  context.sendText('xxx.com');

  expect(client.turnTypingIndicatorsOn).toBeCalled();
  expect(client.turnTypingIndicatorsOff).not.toBeCalled();

  jest.runAllTimers();

  jest.useRealTimers();

  await new Promise(resolve => setTimeout(resolve, 0));

  expect(client.turnTypingIndicatorsOff).not.toBeCalled();
});

it('should not show typing when sending to others', async () => {
  jest.useFakeTimers();

  const { context, client } = setup();

  context.sendTextTo('uid_1', 'xxx.com');

  jest.runAllTimers();

  jest.useRealTimers();

  await new Promise(resolve => setTimeout(resolve, 0));

  expect(client.turnTypingIndicatorsOn).not.toBeCalled();
  expect(client.turnTypingIndicatorsOff).not.toBeCalled();
});