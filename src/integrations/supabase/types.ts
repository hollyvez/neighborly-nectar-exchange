export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      asks: {
        Row: {
          created_at: string
          creator_id: string
          description: string
          expiration_date: string
          id: string
          neighborhood_id: string
          type: Database["public"]["Enums"]["ask_type"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          creator_id: string
          description: string
          expiration_date?: string
          id?: string
          neighborhood_id: string
          type: Database["public"]["Enums"]["ask_type"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          creator_id?: string
          description?: string
          expiration_date?: string
          id?: string
          neighborhood_id?: string
          type?: Database["public"]["Enums"]["ask_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "asks_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "asks_neighborhood_id_fkey"
            columns: ["neighborhood_id"]
            isOneToOne: false
            referencedRelation: "neighborhood_info"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_log: {
        Row: {
          action_type: string
          created_at: string
          details: Json | null
          id: string
          neighborhood_id: string | null
          notes: string | null
          target_user_id: string | null
          trade_id: string | null
          user_id: string
        }
        Insert: {
          action_type: string
          created_at?: string
          details?: Json | null
          id?: string
          neighborhood_id?: string | null
          notes?: string | null
          target_user_id?: string | null
          trade_id?: string | null
          user_id: string
        }
        Update: {
          action_type?: string
          created_at?: string
          details?: Json | null
          id?: string
          neighborhood_id?: string | null
          notes?: string | null
          target_user_id?: string | null
          trade_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_log_neighborhood_id_fkey"
            columns: ["neighborhood_id"]
            isOneToOne: false
            referencedRelation: "neighborhood_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_log_trade_id_fkey"
            columns: ["trade_id"]
            isOneToOne: false
            referencedRelation: "trades"
            referencedColumns: ["id"]
          },
        ]
      }
      dismissed_asks: {
        Row: {
          ask_id: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          ask_id: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          ask_id?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dismissed_asks_ask_id_fkey"
            columns: ["ask_id"]
            isOneToOne: false
            referencedRelation: "asks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dismissed_asks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_dismissed_asks_ask"
            columns: ["ask_id"]
            isOneToOne: false
            referencedRelation: "asks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_dismissed_asks_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      high_fives: {
        Row: {
          created_at: string
          id: string
          is_read: boolean
          reason: string | null
          recipient_id: string
          sender_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          reason?: string | null
          recipient_id: string
          sender_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean
          reason?: string | null
          recipient_id?: string
          sender_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "high_fives_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "high_fives_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      invites: {
        Row: {
          created_at: string
          expires_at: string | null
          id: string
          invite_token: string | null
          neighborhood_id: string | null
          recipient_email: string | null
          recipient_phone: string | null
          sender_id: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          expires_at?: string | null
          id?: string
          invite_token?: string | null
          neighborhood_id?: string | null
          recipient_email?: string | null
          recipient_phone?: string | null
          sender_id?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          expires_at?: string | null
          id?: string
          invite_token?: string | null
          neighborhood_id?: string | null
          recipient_email?: string | null
          recipient_phone?: string | null
          sender_id?: string | null
          status?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_invites_sender"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invites_neighborhood_id_fkey"
            columns: ["neighborhood_id"]
            isOneToOne: false
            referencedRelation: "neighborhood_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invites_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      items: {
        Row: {
          created_at: string
          description: string | null
          expiration_date: string | null
          id: string
          is_published: boolean | null
          name: string
          profile_id: string
          search_vector: unknown
          token_value: number | null
          type: Database["public"]["Enums"]["item_type"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          expiration_date?: string | null
          id?: string
          is_published?: boolean | null
          name: string
          profile_id: string
          search_vector?: unknown
          token_value?: number | null
          type: Database["public"]["Enums"]["item_type"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          expiration_date?: string | null
          id?: string
          is_published?: boolean | null
          name?: string
          profile_id?: string
          search_vector?: unknown
          token_value?: number | null
          type?: Database["public"]["Enums"]["item_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_items_profile"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "items_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      join_requests: {
        Row: {
          address: string
          created_at: string
          email: string
          id: string
          name: string
          neighborhood_id: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          address: string
          created_at?: string
          email: string
          id?: string
          name: string
          neighborhood_id?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          address?: string
          created_at?: string
          email?: string
          id?: string
          name?: string
          neighborhood_id?: string | null
          status?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "join_requests_neighborhood_id_fkey"
            columns: ["neighborhood_id"]
            isOneToOne: false
            referencedRelation: "neighborhood_info"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          ask_id: string
          content: string
          created_at: string
          id: string
          recipient_id: string
          sender_id: string
          updated_at: string
        }
        Insert: {
          ask_id: string
          content: string
          created_at?: string
          id?: string
          recipient_id: string
          sender_id: string
          updated_at?: string
        }
        Update: {
          ask_id?: string
          content?: string
          created_at?: string
          id?: string
          recipient_id?: string
          sender_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_messages_ask"
            columns: ["ask_id"]
            isOneToOne: false
            referencedRelation: "asks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_messages_recipient"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_messages_sender"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_ask_id_fkey"
            columns: ["ask_id"]
            isOneToOne: false
            referencedRelation: "asks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      neighborhood_champions: {
        Row: {
          created_at: string
          id: string
          neighborhood_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          neighborhood_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          neighborhood_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_neighborhood_champions_neighborhood"
            columns: ["neighborhood_id"]
            isOneToOne: false
            referencedRelation: "neighborhoods"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_neighborhood_champions_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "neighborhood_champions_neighborhood_id_fkey"
            columns: ["neighborhood_id"]
            isOneToOne: false
            referencedRelation: "neighborhood_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "neighborhood_champions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      neighborhood_hoas: {
        Row: {
          contact_name: string
          contact_phone: string
          created_at: string
          id: string
          name: string
          neighborhood_id: string
          updated_at: string
        }
        Insert: {
          contact_name: string
          contact_phone: string
          created_at?: string
          id?: string
          name: string
          neighborhood_id: string
          updated_at?: string
        }
        Update: {
          contact_name?: string
          contact_phone?: string
          created_at?: string
          id?: string
          name?: string
          neighborhood_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_neighborhood_hoas_neighborhood"
            columns: ["neighborhood_id"]
            isOneToOne: false
            referencedRelation: "neighborhoods"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "neighborhood_hoas_neighborhood_id_fkey"
            columns: ["neighborhood_id"]
            isOneToOne: false
            referencedRelation: "neighborhood_info"
            referencedColumns: ["id"]
          },
        ]
      }
      neighborhood_info: {
        Row: {
          archived: boolean | null
          archived_at: string | null
          content: string
          created_at: string
          created_by: string | null
          free_monthly_tokens: number | null
          id: string
          is_beta: boolean | null
          is_public: boolean | null
          status: string | null
          subscription_required: boolean | null
          suspended_at: string | null
          suspension_end_at: string | null
          title: string
          type: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          archived?: boolean | null
          archived_at?: string | null
          content: string
          created_at?: string
          created_by?: string | null
          free_monthly_tokens?: number | null
          id?: string
          is_beta?: boolean | null
          is_public?: boolean | null
          status?: string | null
          subscription_required?: boolean | null
          suspended_at?: string | null
          suspension_end_at?: string | null
          title: string
          type?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          archived?: boolean | null
          archived_at?: string | null
          content?: string
          created_at?: string
          created_by?: string | null
          free_monthly_tokens?: number | null
          id?: string
          is_beta?: boolean | null
          is_public?: boolean | null
          status?: string | null
          subscription_required?: boolean | null
          suspended_at?: string | null
          suspension_end_at?: string | null
          title?: string
          type?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      neighborhood_members: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          created_at: string
          id: string
          neighborhood_id: string
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string
          id?: string
          neighborhood_id: string
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string
          id?: string
          neighborhood_id?: string
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_neighborhood_members_approved_by"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_neighborhood_members_neighborhood"
            columns: ["neighborhood_id"]
            isOneToOne: false
            referencedRelation: "neighborhoods"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_neighborhood_members_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "neighborhood_members_neighborhood_id_fkey"
            columns: ["neighborhood_id"]
            isOneToOne: false
            referencedRelation: "neighborhood_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "neighborhood_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      neighborhood_zip_codes: {
        Row: {
          created_at: string
          id: string
          neighborhood_id: string
          updated_at: string
          zip_code: string
        }
        Insert: {
          created_at?: string
          id?: string
          neighborhood_id: string
          updated_at?: string
          zip_code: string
        }
        Update: {
          created_at?: string
          id?: string
          neighborhood_id?: string
          updated_at?: string
          zip_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_neighborhood_zip_codes_neighborhood"
            columns: ["neighborhood_id"]
            isOneToOne: false
            referencedRelation: "neighborhoods"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "neighborhood_zip_codes_neighborhood_id_fkey"
            columns: ["neighborhood_id"]
            isOneToOne: false
            referencedRelation: "neighborhood_info"
            referencedColumns: ["id"]
          },
        ]
      }
      neighborhoods: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          status: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          status?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          city: string | null
          created_at: string
          default_neighborhood_id: string | null
          email: string | null
          first_name: string | null
          household_size: number | null
          id: string
          is_beta_tester: boolean | null
          is_subscribed: boolean | null
          join_reason: string | null
          last_name: string | null
          neighborhood_id: string | null
          state: string | null
          street_address: string | null
          subscribed_at: string | null
          updated_at: string
          years_in_neighborhood: number | null
          zip_code: string | null
        }
        Insert: {
          avatar_url?: string | null
          city?: string | null
          created_at?: string
          default_neighborhood_id?: string | null
          email?: string | null
          first_name?: string | null
          household_size?: number | null
          id: string
          is_beta_tester?: boolean | null
          is_subscribed?: boolean | null
          join_reason?: string | null
          last_name?: string | null
          neighborhood_id?: string | null
          state?: string | null
          street_address?: string | null
          subscribed_at?: string | null
          updated_at?: string
          years_in_neighborhood?: number | null
          zip_code?: string | null
        }
        Update: {
          avatar_url?: string | null
          city?: string | null
          created_at?: string
          default_neighborhood_id?: string | null
          email?: string | null
          first_name?: string | null
          household_size?: number | null
          id?: string
          is_beta_tester?: boolean | null
          is_subscribed?: boolean | null
          join_reason?: string | null
          last_name?: string | null
          neighborhood_id?: string | null
          state?: string | null
          street_address?: string | null
          subscribed_at?: string | null
          updated_at?: string
          years_in_neighborhood?: number | null
          zip_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_profiles_default_neighborhood"
            columns: ["default_neighborhood_id"]
            isOneToOne: false
            referencedRelation: "neighborhoods"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_profiles_neighborhood"
            columns: ["neighborhood_id"]
            isOneToOne: false
            referencedRelation: "neighborhoods"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_default_neighborhood_id_fkey"
            columns: ["default_neighborhood_id"]
            isOneToOne: false
            referencedRelation: "neighborhood_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_neighborhood_id_fkey"
            columns: ["neighborhood_id"]
            isOneToOne: false
            referencedRelation: "neighborhood_info"
            referencedColumns: ["id"]
          },
        ]
      }
      saved_items: {
        Row: {
          created_at: string
          id: string
          item_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          item_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          item_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "saved_items_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
        ]
      }
      tokens: {
        Row: {
          amount: number
          created_at: string
          expires_at: string | null
          id: string
          issued_by: string | null
          notes: string | null
          profile_id: string
          token_source: Database["public"]["Enums"]["token_source"] | null
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          expires_at?: string | null
          id?: string
          issued_by?: string | null
          notes?: string | null
          profile_id: string
          token_source?: Database["public"]["Enums"]["token_source"] | null
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          expires_at?: string | null
          id?: string
          issued_by?: string | null
          notes?: string | null
          profile_id?: string
          token_source?: Database["public"]["Enums"]["token_source"] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_tokens_profile"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tokens_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      trade_disputes: {
        Row: {
          created_at: string
          flagged_by: string
          id: string
          resolution_notes: string | null
          resolved_at: string | null
          resolved_by: string | null
          status: string
          trade_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          flagged_by: string
          id?: string
          resolution_notes?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          status?: string
          trade_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          flagged_by?: string
          id?: string
          resolution_notes?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          status?: string
          trade_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "trade_disputes_trade_id_fkey"
            columns: ["trade_id"]
            isOneToOne: false
            referencedRelation: "trades"
            referencedColumns: ["id"]
          },
        ]
      }
      trade_items: {
        Row: {
          created_at: string
          id: string
          item_id: string | null
          trade_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          item_id?: string | null
          trade_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          item_id?: string | null
          trade_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_trade_items_item"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_trade_items_trade"
            columns: ["trade_id"]
            isOneToOne: false
            referencedRelation: "trades"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trade_items_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trade_items_trade_id_fkey"
            columns: ["trade_id"]
            isOneToOne: false
            referencedRelation: "trades"
            referencedColumns: ["id"]
          },
        ]
      }
      trade_messages: {
        Row: {
          created_at: string
          id: string
          message: string
          sender_id: string
          trade_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          sender_id: string
          trade_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          sender_id?: string
          trade_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_trade_messages_sender"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_trade_messages_trade"
            columns: ["trade_id"]
            isOneToOne: false
            referencedRelation: "trades"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trade_messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trade_messages_trade_id_fkey"
            columns: ["trade_id"]
            isOneToOne: false
            referencedRelation: "trades"
            referencedColumns: ["id"]
          },
        ]
      }
      trade_notifications: {
        Row: {
          created_at: string
          id: string
          is_read: boolean | null
          trade_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean | null
          trade_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean | null
          trade_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "trade_notifications_trade_id_fkey"
            columns: ["trade_id"]
            isOneToOne: false
            referencedRelation: "trades"
            referencedColumns: ["id"]
          },
        ]
      }
      trades: {
        Row: {
          ask_id: string | null
          counter_number: number | null
          created_at: string
          id: string
          initiator_id: string
          initiator_item_id: string | null
          message: string | null
          parent_trade_id: string | null
          recipient_id: string | null
          recipient_item_id: string | null
          rejection_reason: string | null
          responded_at: string | null
          status: Database["public"]["Enums"]["trade_status"]
          token_amount: number | null
          trade_type: Database["public"]["Enums"]["trade_type"]
          updated_at: string
        }
        Insert: {
          ask_id?: string | null
          counter_number?: number | null
          created_at?: string
          id?: string
          initiator_id: string
          initiator_item_id?: string | null
          message?: string | null
          parent_trade_id?: string | null
          recipient_id?: string | null
          recipient_item_id?: string | null
          rejection_reason?: string | null
          responded_at?: string | null
          status?: Database["public"]["Enums"]["trade_status"]
          token_amount?: number | null
          trade_type?: Database["public"]["Enums"]["trade_type"]
          updated_at?: string
        }
        Update: {
          ask_id?: string | null
          counter_number?: number | null
          created_at?: string
          id?: string
          initiator_id?: string
          initiator_item_id?: string | null
          message?: string | null
          parent_trade_id?: string | null
          recipient_id?: string | null
          recipient_item_id?: string | null
          rejection_reason?: string | null
          responded_at?: string | null
          status?: Database["public"]["Enums"]["trade_status"]
          token_amount?: number | null
          trade_type?: Database["public"]["Enums"]["trade_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "trades_ask_id_fkey"
            columns: ["ask_id"]
            isOneToOne: false
            referencedRelation: "asks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trades_initiator_id_fkey"
            columns: ["initiator_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trades_initiator_item_id_fkey"
            columns: ["initiator_item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trades_parent_trade_id_fkey"
            columns: ["parent_trade_id"]
            isOneToOne: false
            referencedRelation: "trades"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trades_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trades_recipient_item_id_fkey"
            columns: ["recipient_item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_user_roles_user"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_suspensions: {
        Row: {
          created_at: string
          created_by: string
          end_date: string | null
          id: string
          reason: string | null
          start_date: string
          type: Database["public"]["Enums"]["suspension_type"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          created_by: string
          end_date?: string | null
          id?: string
          reason?: string | null
          start_date?: string
          type: Database["public"]["Enums"]["suspension_type"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          created_by?: string
          end_date?: string | null
          id?: string
          reason?: string | null
          start_date?: string
          type?: Database["public"]["Enums"]["suspension_type"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_user_suspensions_created_by"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_user_suspensions_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      admin_issue_tokens: {
        Args: {
          admin_notes?: string
          expires_in_months?: number
          target_user_id: string
          token_amount: number
        }
        Returns: string
      }
      cleanup_expired_tokens: { Args: never; Returns: undefined }
      deposit_monthly_beta_tester_tokens: { Args: never; Returns: undefined }
      deposit_monthly_champion_tokens: { Args: never; Returns: undefined }
      deposit_monthly_subscription_tokens: { Args: never; Returns: undefined }
      deposit_neighborhood_member_tokens: { Args: never; Returns: undefined }
      generate_invite_token: { Args: never; Returns: string }
      get_pending_approvals_for_champion: {
        Args: { champion_user_id: string }
        Returns: {
          neighborhood_id: string
          neighborhood_name: string
          pending_count: number
        }[]
      }
      get_public_items: {
        Args: { user_id: string }
        Returns: {
          created_at: string
          description: string | null
          expiration_date: string | null
          id: string
          is_published: boolean | null
          name: string
          profile_id: string
          search_vector: unknown
          token_value: number | null
          type: Database["public"]["Enums"]["item_type"]
          updated_at: string
        }[]
        SetofOptions: {
          from: "*"
          to: "items"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      is_champion_or_superadmin: { Args: { user_id: string }; Returns: boolean }
      is_superadmin: { Args: { user_id: string }; Returns: boolean }
      log_audit_event: {
        Args: {
          p_action_type: string
          p_details?: Json
          p_neighborhood_id?: string
          p_notes?: string
          p_target_user_id?: string
          p_trade_id?: string
        }
        Returns: string
      }
      user_shares_neighborhood: {
        Args: { check_user_id: string; target_neighborhood_id: string }
        Returns: boolean
      }
    }
    Enums: {
      ask_type: "ladder_love" | "butter_alert"
      item_type: "stuff" | "talent"
      suspension_type: "temporary" | "permanent"
      token_source:
        | "subscription"
        | "admin_issued"
        | "purchased"
        | "champion_monthly"
      trade_status:
        | "pending"
        | "accepted"
        | "rejected"
        | "completed"
        | "cancelled"
      trade_type: "stuff" | "tokens" | "both"
      user_role: "user" | "champion" | "superadmin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      ask_type: ["ladder_love", "butter_alert"],
      item_type: ["stuff", "talent"],
      suspension_type: ["temporary", "permanent"],
      token_source: [
        "subscription",
        "admin_issued",
        "purchased",
        "champion_monthly",
      ],
      trade_status: [
        "pending",
        "accepted",
        "rejected",
        "completed",
        "cancelled",
      ],
      trade_type: ["stuff", "tokens", "both"],
      user_role: ["user", "champion", "superadmin"],
    },
  },
} as const
