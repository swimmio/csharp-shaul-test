---
title: 'Action: GET_CURRENT_EHR_USER_INFORMATION'
---
The GET_CURRENT_EHR_USER_INFORMATION is basically fetching the user information that is available on the EHR.

In NextGen, the "user" is the provider, and we can only fetch the current provider when listening to the SQL query, when the provider navigates to a SOAP page.

In NextGen, it happen when the SQL listener is listening to the following query:

<SwmSnippet path="/client/runtime/src/ehrs/nextgen-desktop-instance/nextgen-queries-listener-config.ts" line="42">

---

&nbsp;

```typescript
  {
    id: 'detectProviderIdChange',
    action: 'GET',
    regex: 'UPDATE active_stations SET .*provider_id =.*',
  },
```

---

</SwmSnippet>

## How to reproduce? (Shenandoah + OS Simulator flow)

How to reproduce? (Shenandoah + OS Simulator Flow)

 1. Run the OS Simulator.\
    ![](https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBYm9va21kJTNBJTNBYm9va21k%2F47fd6d82-d215-4666-a6a8-f7f335ddb631.png?alt=media&token=72b0f4ce-7f01-4680-a4f2-263609364d3e)

 2. Open and Login to a NextGen Instance.\
    ![](https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBYm9va21kJTNBJTNBYm9va21k%2F7abab103-99db-4100-b953-f4fa6ebd09b7.png?alt=media&token=f8fb503e-a608-44f0-8592-59913852b2aa)

 3. Wait for the OS Simulator to be initiated.\
    ![](https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBYm9va21kJTNBJTNBYm9va21k%2F9e7cace8-8985-474e-a69f-aca4538a8314.png?alt=media&token=181484bf-98db-4cf6-ba49-6e9914e693c7)

 4. Click on the Patient button.\
    ![](https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBYm9va21kJTNBJTNBYm9va21k%2Fd94787e4-76da-4c7b-b816-2f2eac9edc8e.png?alt=media&token=2c88261d-8d31-4daa-8530-1c17dc975d65)![](https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBYm9va21kJTNBJTNBYm9va21k%2F221c0ffa-b381-4bae-ab2a-28a57b09236c.png?alt=media&token=f72e4972-8110-4fd6-8d1a-7e51ecc811cf)

 5. Search "Moomin" or any other patient, and click on the "Find" button.\
    ![](https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBYm9va21kJTNBJTNBYm9va21k%2F5e31f3b0-76d4-44b2-8b47-0cff6f335f26.png?alt=media&token=e9863acc-1378-4b51-b9c0-998f0944af20)

 6. Double click on the first result.\
    ![](https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBYm9va21kJTNBJTNBYm9va21k%2F0467dcd6-15b7-49f1-98a8-2468dd71fb66.png?alt=media&token=c0b5d9e5-7ef0-46b2-b3c6-0b083442f87e)

 7. Once the patient chart is loaded, on the side menu, click on the "SOAP" (Make sure its not marked as read only) - If it does not exist you can create one.\
    ![](https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBYm9va21kJTNBJTNBYm9va21k%2Fdc3f8748-08fc-4ec6-9d8b-08c468492f47.png?alt=media&token=902092fd-bcd9-4d58-9413-7b2396daa187)![](https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBYm9va21kJTNBJTNBYm9va21k%2Fd73fff2b-705e-4d2c-81eb-f696e931a257.png?alt=media&token=cf64049a-0b6d-4143-bc68-b22405927cb4)

 8. Once the SOAP is loaded, go to the OS Simulator.\
    ![](https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBYm9va21kJTNBJTNBYm9va21k%2F0b764ba4-3689-427c-bfe4-6dc0137a0802.png?alt=media&token=97f716e2-1281-45d3-bf4d-4e65d9723d5b)

 9. Navigate to the "Actions" tab.\
    ![](https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBYm9va21kJTNBJTNBYm9va21k%2Fb5add062-25eb-470d-a5f8-d5d66852d532.png?alt=media&token=16faf41b-2380-43d9-9664-9ad7bac6d406)

10. On the drop down, select the "GET_CURRENT_EHR_USER_INFORMATION" action.\
    ![](https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBYm9va21kJTNBJTNBYm9va21k%2F2e0f80c4-00e7-4cfa-af5b-1dd0e8d0951d.png?alt=media&token=385e24ab-c17e-4392-a541-cb771281692f)

11. Click on the "Run" button and wait for a few seconds, you will see the current provider result.\
    ![](https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBYm9va21kJTNBJTNBYm9va21k%2Fbe49db04-eaf3-4d57-8205-c7d371e9c22d.png?alt=media&token=2708a47b-3cfc-4770-83fa-758e953df871)

&nbsp;

## The Code

The caller code that trigger the action located here:

<SwmSnippet path="client/runtime/src/ehrs/nextgen-desktop-instance/index.ts" line="286">

---

&nbsp;

```
  public async getPotentialUserMetadata(input: {
    linkedEhrUser: string;
    organizationId: number;
  }): Promise<Graphql.PotentialUserMetadata> {
    const result = await this.executeAction(
      Standard.Actions.ActionNames.GET_CURRENT_EHR_USER_INFORMATION,
      undefined,
      undefined,
    );
    const { username, ...data } = result;
    return {
      ...data,
      organizationId: input.organizationId,
      linkedEhrUser: username ?? input.linkedEhrUser,
    };
  }
```

---

</SwmSnippet>

The actual code that execute the logic located here:

<SwmSnippet path="/client/runtime/src/ehrs/nextgen-desktop-instance/actions/executors/getCurrentEhrUserInformation.ts" line="12">

---

&nbsp;

```typescript
export class GetCurrentEhrUserInformationActionExecutor implements ActionExecutor {
  constructor(private logger = staticLogger) {}

  run: Standard.Actions.ActionHandler<typeof GET_CURRENT_EHR_USER_INFORMATION> = async () => {
    try {
      this.logger.info('Start getEhrUserInformation action', {
        noPHI: true,
        action: typeof GET_CURRENT_EHR_USER_INFORMATION,
      });
      const lastProviderDataInstance = LastProviderData.getInstance();
      const provider: ProviderData | undefined =
        await lastProviderDataInstance.getLastProviderData();
      if (!provider) {
        const errorMessage: string = 'No provider data found';
        this.logger.info(errorMessage, {
          noPHI: true,
          action: typeof GET_CURRENT_EHR_USER_INFORMATION,
        });
        throw new Error(errorMessage);
      }
      const ehrUserInformation: Standard.Actions.ActionsStandard[typeof GET_CURRENT_EHR_USER_INFORMATION]['response'] =
        {
          username: LoginProcess.getInstance().getUsername() || '',
          firstName: provider.first_name,
          lastName: provider.last_name,
          npi: provider.national_provider_id,
          phoneNumber: provider.phone,
          email: provider.email_address,
          address: {
            address1: provider.address_line_1,
            city: provider.city,
            state: provider.state,
            zipCode: provider.zip,
          },
        };
      this.logger.info('Finish getEhrUserInformation action', {
        noPHI: true,
        action: Standard.Actions.ActionNames.GET_CURRENT_EHR_USER_INFORMATION,
        ehrUserInformation,
      });
      return ehrUserInformation;
    } catch (error: any) {
      this.logger.warning('Error on getEhrUserInformation action', { error });
      throw error;
    }
  };
}
```

---

</SwmSnippet>

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBYm9va21kJTNBJTNBYm9va21k" repo-name="bookmd"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
